"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserNav from "./UserNav";
import MobileUserNav from "./MobileUserNav";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-row justify-center items-center gap-2.5 absolute right-0 top-0 mr-2.5 mt-2.5">
      {!session?.user ? (
        <Button variant="default">
          <Link href="/auth/login">Login</Link>
        </Button>
      ) : (
        <>
          <div className="sm:block hidden">
            <UserNav user={session.user} />
          </div>
          <div className="sm:hidden block">
            <MobileUserNav user={session.user} />
          </div>
        </>
      )}
      <div className="sm:block hidden">
        <ThemeToggle />
      </div>
    </nav>
  );
}
