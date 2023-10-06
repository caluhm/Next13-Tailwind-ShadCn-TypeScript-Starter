import {
  countTotalLessonsByCourseId,
  countTotalLessonsCompletedByCourseId,
} from "@/app/actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Progress } from "@/components/ui/progress";
import { getServerSession } from "next-auth";
export default async function Stats({
  courseId,
  title,
  description,
}: {
  courseId: string;
  title: string;
  description?: string;
}) {
  const session = await getServerSession(authOptions);
  const totalLessons = await countTotalLessonsByCourseId(courseId);
  const completedLessons = await countTotalLessonsCompletedByCourseId(
    courseId,
    session?.user?.id!,
  );

  const progress = Math.round((completedLessons / totalLessons) * 100);
  return (
    <div className="w-full flex flex-col gap-8 mt-6 px-2">
      <div className="border border-foreground rounded-lg px-6 py-12 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col w-full gap-2 bg-muted px-4 py-6 rounded-lg">
        <p className="text-base font-medium">Course Progress</p>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="w-[75%]">
            <Progress value={progress} className="bg-background" />
          </div>
          <span className="text-sm font-medium">{progress}% Complete</span>
        </div>
      </div>
    </div>
  );
}
