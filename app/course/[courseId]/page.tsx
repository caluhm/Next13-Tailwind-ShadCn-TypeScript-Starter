import { fetchChaptersByCourseId, fetchCourseById } from "@/app/actions";
import { canViewCourse } from "@/lib/isauthorised";
import Stats from "./components/Stats";
import CourseSelect from "./components/CourseSelect";
import LessonSelect from "./components/LessonSelect";
import { redirect } from "next/navigation";

export default async function Course({
  params,
}: {
  params: { courseId: string };
}) {
  await canViewCourse();

  const course = await fetchCourseById(params.courseId);
  !course && redirect("/course")
  const chapters = await fetchChaptersByCourseId(course?.id!);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 pt-20">
      <section className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-[auto_1fr_1fr] gap-6 w-full px-6 lg:h-[calc(100dvh-5rem)] lg:overflow-hidden relative">
        <CourseSelect selectedId={course?.id} />
        <Stats
          courseId={course?.id!}
          title={course?.title!}
          description={course?.description}
        />
        <LessonSelect chapters={chapters} />
      </section>
    </main>
  );
}
