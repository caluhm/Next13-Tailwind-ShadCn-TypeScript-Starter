import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
      <div className="absolute right-0 top-0 mr-2.5 mt-2.5">
        <ThemeToggle />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold underline underline-offset-2">
          NextJS 13 + TailwindCSS + Shadcn/ui + TypeScript
        </h1>
        <h2 className="text-xl font-medium">Starter Template</h2>
      </div>
    </main>
  );
}
