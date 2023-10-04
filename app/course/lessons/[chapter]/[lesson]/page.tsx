import { canViewCourse } from "@/lib/isauthorised";

export default async function LessonPage({
  params,
}: {
  params: { chapter: string; lesson: number };
}) {
  await canViewCourse();
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 flex justify-center items-center">
      <h1 className="text-6xl font-bold">
        Chapter:{" "}
        {params.chapter.charAt(0).toUpperCase() + params.chapter.slice(1)},
        Lesson: {params.lesson}
      </h1>
    </main>
  );
}
