import LessonSelect from "./components/LessonSelect";
import Stats from "./components/Stats";
import CourseSelect from "./components/CourseSelect";
import { canViewCourse } from "@/lib/isauthorised";

export default async function Course() {
  await canViewCourse();
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 pt-20">
      <section className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-[auto_1fr_1fr] gap-6 w-full px-6 lg:h-[calc(100dvh-5rem)] lg:overflow-hidden relative">
        <CourseSelect />
        <Stats />
        <LessonSelect />
      </section>
    </main>
  );
}
