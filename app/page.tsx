import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <section className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-7xl font-bold">Welcome to our course.</h1>
        <p className="text-xl font-medium">
          Here you will learn how to build a fullstack app with Next.js, Prisma,
          and Tailwind CSS.
        </p>
        <form action="/api/checkout" method="POST">
          <Button type="submit" variant="outline" size="lg">
            Purchase course
          </Button>
        </form>
      </section>
    </main>
  );
}
