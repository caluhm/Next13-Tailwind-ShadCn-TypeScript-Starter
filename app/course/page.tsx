import { canViewCourse } from "@/lib/isauthorised";
import { fetchFirstCourse } from "../actions";
import { redirect } from "next/navigation";

export default async function Course() {
  await canViewCourse();
  const course = await fetchFirstCourse();
  return redirect(`/course/${course?.id}`);
}
