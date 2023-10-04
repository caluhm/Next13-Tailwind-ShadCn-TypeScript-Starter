import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
      username: string;
      role: string;
      stripeCustomerId: string;
    };
  }
  interface User extends DefaultUser {
    username: string;
    role: string;
    stripeCustomerId: string;
  }
}
