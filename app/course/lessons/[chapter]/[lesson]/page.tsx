import { fetchLessonById } from "@/app/actions";
import { canViewCourse } from "@/lib/isauthorised";
import { link } from "fs";

export default async function LessonPage({
  params,
}: {
  params: { chapter: string; lesson: string };
}) {
  await canViewCourse();
  const lesson = await fetchLessonById(params.lesson);
  console.log(lesson?.link);
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 flex justify-center items-center">
      <div className="w-5/6 aspect-video rounded-md overflow-hidden p-24">
        {lesson?.link ? (
          <iframe
            src={lesson?.link.replace("watch?v=", "embed/")}
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        ) : (
          <div className="w-full h-full bg-[#13171D] flex flex-col justify-center items-center">
            <h4 className="text-3xl font-medium text-neutral-300">
              No trailer available...
            </h4>
          </div>
        )}
      </div>
    </main>
  );
}
