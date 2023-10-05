import Link from "next/link";
import { fetchAllCourses } from "../actions";
import CreateNewCourse from "./components/CreateNewCourse";

import { Component1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import DeleteCourse from "./components/DeleteCourse";
import { canViewCourse } from "@/lib/isauthorised";

export default async function AdminPage() {
  await canViewCourse();
  const courses = await fetchAllCourses();
  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 pt-20">
      <div className="w-full flex flex-col gap-8 xl:px-24 lg:px-12 md:px-6 px-4">
        <CreateNewCourse />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {courses.map((course) => (
            <div className="bg-muted rounded-lg p-4 w-full" key={course.id}>
              <div className="flex flex-col justify-between min-h-[10rem]">
                <div className="flex flex-row items-center gap-3 w-full">
                  <div className="rounded-lg border border-muted-foreground bg-foreground/10 w-10 h-10 flex justify-center items-center">
                    <Component1Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="font-semibold text-lg">{course.title}</span>
                </div>
                <div className="text-sm text-muted-foreground text-left">
                  {course.description}
                </div>
                <div className="w-full flex justify-end gap-2.5">
                  <Link href={`/admin/course/${course.id}`}>
                    <Button variant="default" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <DeleteCourse id={course.id} title={course.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
