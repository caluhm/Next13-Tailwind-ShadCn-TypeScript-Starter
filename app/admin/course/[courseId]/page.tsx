import { fetchCourseById, fetchChaptersByCourseId } from "@/app/actions";
import CreateNewChapter from "./components/CreateNewChapter";
import CourseDetailsForm from "./components/CourseDetailsForm";
import DeleteCourseAndRedirect from "./components/DeleteCourseAndRedirect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DeleteChapter from "./components/DeleteChapter";
import { canViewCourse } from "@/lib/isauthorised";
import BackButton from "@/components/BackButton";

export default async function AdminCoursePage({
  params,
}: {
  params: { courseId: string };
}) {
  await canViewCourse();
  const course = await fetchCourseById(params.courseId);
  const chapters = await fetchChaptersByCourseId(params.courseId);

  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 pt-20">
      <BackButton />
      <div className="w-full flex flex-col gap-8 xl:px-24 lg:px-12 md:px-6 px-4">
        <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-2.5">
          <h1 className="lg:text-2xl text-lg font-semibold">
            Course: {course?.title}
          </h1>
          <div className="flex gap-4">
            <CreateNewChapter courseId={params.courseId} />
            <DeleteCourseAndRedirect id={course?.id!} title={course?.title!} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full gap-12 p-6 border rounded-lg">
          <div className="w-full flex flex-col gap-2.5">
            <h3 className="font-semibold">Course Details</h3>
            <div className="border rounded-lg p-4">
              <CourseDetailsForm
                courseId={course?.id!}
                title={course?.title!}
                description={course?.description!}
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col gap-2.5">
              <h3 className="font-semibold">Chapters</h3>
              {chapters?.map((chapter) => (
                <div className="w-full flex flex-col gap-3 p-4 border rounded-lg">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="text-lg font-semibold">
                        {chapter.title}
                      </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-4">
                      <Link
                        href={`/admin/course/${course?.id}/chapter/${chapter.id}`}
                      >
                        <Button variant="default" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <DeleteChapter
                        courseId={course?.id!}
                        chapterId={chapter.id}
                        title={chapter.title}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground text-left">
                    {chapter.description}
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
