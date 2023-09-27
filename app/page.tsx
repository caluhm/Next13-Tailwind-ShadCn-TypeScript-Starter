import { Button } from "@/components/ui/button";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <section className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-7xl font-bold">Welcome to our course.</h1>
        <p className="text-xl font-medium">
          Here you will learn how to build a fullstack app with Next.js, Prisma,
          and Tailwind CSS.
        </p>
        {session?.user?.hasPurchased ? (
          <p className="text-xl font-medium">
            You already purchased this course.
          </p>
        ) : (
          <form action="/api/stripe/checkout" method="POST">
            <Button
              type="submit"
              variant="outline"
              size="lg"
            >
              Purchase course
            </Button>
          </form>
        )}
      </section>
    </main>
  );
}
