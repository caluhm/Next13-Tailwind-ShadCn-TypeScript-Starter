import {
  fetchCourseById,
  fetchChapterById,
  fetchLessonsByChapterId,
} from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateNewLesson from "./components/CreateNewLesson";
import DeleteChapterAndRedirect from "./components/DeleteChapterAndRedirect";
import ChapterDetailsForm from "./components/ChapterDetailsForm";
import DeleteLesson from "./components/DeleteLesson";
import { canViewCourse } from "@/lib/isauthorised";
import BackButton from "@/components/BackButton";

export default async function AdminCourseChapterPage({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) {
  await canViewCourse();
  const course = await fetchCourseById(params.courseId);
  const chapter = await fetchChapterById(params.chapterId);
  const lessons = await fetchLessonsByChapterId(params.chapterId);
  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 pt-20">
      <BackButton />
      <div className="w-full flex flex-col gap-8 xl:px-24 lg:px-12 md:px-6 px-4">
        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-2.5">
          <h1 className="lg:text-2xl text-lg font-semibold">
            Course: {course?.title}, Chapter: {chapter?.title}
          </h1>
          <div className="flex gap-4">
            <CreateNewLesson courseId={course?.id!} chapterId={chapter?.id!} />
            <DeleteChapterAndRedirect
              courseId={course?.id!}
              chapterId={chapter?.id!}
              title={chapter?.title!}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full gap-12 p-6 border rounded-lg">
          <div className="w-full flex flex-col gap-2.5">
            <h3 className="font-semibold">Chapter Details</h3>
            <div className="border rounded-lg p-4">
              <ChapterDetailsForm
                chapterId={chapter?.id!}
                courseId={course?.id!}
                title={chapter?.title!}
                description={chapter?.description!}
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col gap-2.5">
              <h3 className="font-semibold">Lessons</h3>
              {lessons?.map((lesson) => (
                <div className="w-full flex flex-col gap-3 p-4 border rounded-lg">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="text-lg font-semibold">
                        {lesson.title}
                      </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-4">
                      <Link
                        href={`/admin/course/${course?.id}/chapter/${chapter?.id}/lesson/${lesson.id}`}
                      >
                        <Button variant="default" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <DeleteLesson
                        courseId={course?.id!}
                        chapterId={chapter?.id!}
                        lessonId={lesson.id}
                        title={lesson.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
