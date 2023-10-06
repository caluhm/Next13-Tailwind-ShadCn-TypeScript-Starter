import {
  fetchCourseById,
  fetchChapterById,
  fetchLessonById,
} from "@/app/actions";

import { canViewCourse } from "@/lib/isauthorised";
import DeleteLessonAndRedirect from "./components/DeleteLessonAndRedirect";
import LessonDetailsForm from "./components/LessonDetailsForm";

export default async function AdminCourseChapterLessonPage({
  params,
}: {
  params: { courseId: string; chapterId: string; lessonId: string };
}) {
  await canViewCourse();
  const course = await fetchCourseById(params.courseId);
  const chapter = await fetchChapterById(params.chapterId);
  const lesson = await fetchLessonById(params.lessonId);
  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 pt-20">
      <div className="w-full flex flex-col gap-8 xl:px-24 lg:px-12 md:px-6 px-4">
        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-2.5">
          <h1 className="lg:text-2xl text-lg font-semibold">
            Course: {course?.title}, Chapter: {chapter?.title}, Lesson:{" "}
            {lesson?.title}
          </h1>
          <div className="flex">
            <DeleteLessonAndRedirect
              courseId={course?.id!}
              chapterId={chapter?.id!}
              lessonId={lesson?.id!}
              title={lesson?.title!}
            />
          </div>
        </div>
        <div className="flex flex-row w-full gap-12 p-6 border rounded-lg">
          <div className="w-full flex flex-col gap-2.5">
            <h3 className="font-semibold">Chapter Details</h3>
            <div className="border rounded-lg p-4">
              <LessonDetailsForm
                chapterId={chapter?.id!}
                courseId={course?.id!}
                lessonId={lesson?.id!}
                title={lesson?.title!}
                link={lesson?.link!}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
