import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2023-08-16",
});

export default async function POST(request: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // TODO: replace this with the `price` of the product you want to sell
          price: "price_1NtFsqFVRAT9rxdZhGOJUqdI",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${request.headers.get(
        "origin",
      )}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/?canceled=true`,
    });
    return NextResponse.redirect(String(session.url), { status: 303 });
  } catch (err: any) {
    return NextResponse.redirect(`/?error=${err.message}`, { status: 303 });
  }
}
