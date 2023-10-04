import NextAuth, { AuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import Stripe from "stripe";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    verifyRequest:
      "/auth/login?message=please-check-your-email-for-the-verification-link",
  },
  callbacks: {
    async session({ session, user }) {
      session!.user!.id = user.id;
      session!.user!.name = user.name;
      session!.user!.username = user.username;
      session!.user!.role = user.role;
      session!.user!.stripeCustomerId = user.stripeCustomerId;
      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-08-16",
      });

      await stripe.customers
        .create({
          email: user.email!,
          name: user.name!,
        })
        .then(async (customer) => {
          return prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: customer.id,
            },
          });
        });
    },
  },
} as AuthOptions;

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
