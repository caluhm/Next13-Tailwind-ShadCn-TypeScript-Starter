import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
      username: string;
      stripeCustomerId: string;
      hasPurchased: boolean;
    };
  }
  interface User extends DefaultUser {
    username: string;
    stripeCustomerId: string;
    hasPurchased: boolean;
  }
}
