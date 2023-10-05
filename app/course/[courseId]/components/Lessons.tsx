import { fetchLessonsByChapterId } from "@/app/actions";
import Link from "next/link";
import { CircleIcon } from "@radix-ui/react-icons";

export default async function Lessons({
  chapter,
}: {
  chapter: { id: string; title: string; description: string };
}) {
  const lessons = await fetchLessonsByChapterId(chapter.id);
  return (
    <>
      {lessons.map((lesson) => (
        <Link
          href={`/course/lessons/${chapter.title.toLowerCase()}/${lesson.id}`}
          key={lesson.id}
        >
          <div
            className="text-xl font-medium rounded border w-full py-2 flex flex-row justify-between px-4 items-center hover:bg-foreground hover:text-background cursor-pointer transition-colors ease-in-out duration-300"
            key={lesson.id}
          >
            <p className="text-sm font-medium">{lesson.title}</p>
            <CircleIcon className="w-7 h-7 text-muted" />
          </div>
        </Link>
      ))}
    </>
  );
}
