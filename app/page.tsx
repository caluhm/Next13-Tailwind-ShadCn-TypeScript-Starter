export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <section className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">Welcome to our course.</h1>
        <p className="text-xl mt-4 font-medium">
          Here you will learn how to build a fullstack app with Next.js, Prisma,
          and Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
