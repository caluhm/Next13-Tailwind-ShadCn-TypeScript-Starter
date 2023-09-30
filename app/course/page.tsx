import { hasPurchased } from "@/lib/haspurchased";

export default async function Course() {
  await hasPurchased();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <section className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-7xl font-bold">
          Thanks for purchasing our course!
        </h1>
        <p className="text-xl font-medium">
          You now have access to all the course content.
        </p>
      </section>
    </main>
  );
}
