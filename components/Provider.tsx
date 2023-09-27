"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children }: any) => {
  return <SessionProvider basePath="/api/auth">{children}</SessionProvider>;
};

export default Provider;
