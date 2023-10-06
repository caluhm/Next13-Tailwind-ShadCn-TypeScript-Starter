import { fetchAllCourses } from "@/app/actions";
import CourseItem from "./CourseItem";

export default async function CourseSelect({
  selectedId,
}: {
  selectedId?: string;
}) {
  const courses = await fetchAllCourses();
  return (
    <div className="relative mt-6 w-[220px] h-min px-2">
      <p className="absolute -mt-6 text-xs text-muted-foreground">Courses:</p>
      <div className="flex flex-col gap-6 rounded-lg p-4 bg-muted">
        {courses?.map((course) => (
          <CourseItem
            key={course.id}
            id={course.id}
            title={course.title}
            selected={course.id === selectedId}
          />
        ))}
      </div>
    </div>
  );
}
