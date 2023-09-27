import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export async function createCheckoutLink(customer: string) {
  const checkout = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000?success=true",
    cancel_url: "http://localhost:3000?cancelled=true",
    customer: customer,
    line_items: [
      {
        price: "price_1NtFsqFVRAT9rxdZhGOJUqdI",
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  return checkout.url;
}
