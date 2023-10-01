import { hasPurchased } from "@/lib/haspurchased";

export default async function Course() {
  await hasPurchased();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <section className="flex h-screen flex-col items-center justify-center gap-5 text-center">
        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-bold">
          Thanks for purchasing our course!
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium">
          You now have access to all the course content.
        </p>
      </section>
    </main>
  );
}
