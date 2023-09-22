import Stripe from "stripe";
import { buffer } from "micro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2023-08-16",
});

const webhookSecret = String(process.env.STRIPE_WEBHOOK_SECRET);

export default async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

      if (event.type === "charge.succeeded") {
        const charge = event.data.object;
        // Handle successful charge
        await prisma.user.upsert({
          create: {
            email: (charge as any).billing_details.email,
          },
          update: {
            email: (charge as any).billing_details.email,
          },
          where: {
            email: (charge as any).billing_details.email,
          },
        });
        res.status(200).send(`This works!`);
      } else {
        console.warn(`Unhandled event type: ${event.type}`);
      }
    } catch (err: any) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
