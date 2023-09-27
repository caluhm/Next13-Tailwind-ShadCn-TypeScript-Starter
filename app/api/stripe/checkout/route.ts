import { createCheckoutLink } from "@/lib/stripe";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST() {
  const session = await getServerSession(authOptions);
  const checkoutLink = await createCheckoutLink(
    session?.user?.stripeCustomerId!,
  );
  return NextResponse.redirect(String(checkoutLink), { status: 303 });
}
