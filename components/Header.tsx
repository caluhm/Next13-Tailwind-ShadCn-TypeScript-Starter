import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { UserNav } from "./UserNav";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex flex-row justify-center items-center gap-2.5 absolute right-0 top-0 mr-2.5 mt-2.5">
      {!session?.user ? (
        <Button variant="default">
          <Link href="/auth/login">Login</Link>
        </Button>
      ) : (
        <UserNav user={session.user} />
      )}
      <ThemeToggle />
    </nav>
  );
}
