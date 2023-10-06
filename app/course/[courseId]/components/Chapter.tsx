import {
  countTotalLessonsByChapterId,
  countTotalLessonsCompletedByChapterId,
} from "@/app/actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Lessons from "./Lessons";
import { Progress } from "@/components/ui/progress";

export default async function Chapter({
  chapter,
}: {
  chapter: { id: string; title: string; description: string };
}) {
  const session = await getServerSession(authOptions);
  const lessonTotal = await countTotalLessonsByChapterId(chapter.id);
  const completedTotal = await countTotalLessonsCompletedByChapterId(
    chapter.id,
    session?.user?.id!,
  );

  const progress = Math.round((completedTotal / lessonTotal) * 100);
  return (
    <div
      className="grid gap-2 text-center p-4 rounded-lg border"
      key={chapter.id}
    >
      <div className="w-full flex flex-row justify-between items-center pb-2">
        <header className="text-xl font-bold">{chapter.title}</header>
        <div>
          <div className="flex flex-row w-full gap-2 items-center">
            <div className="w-20">
              <Progress value={progress} />
            </div>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        </div>
      </div>
      <Lessons chapter={chapter} />
    </div>
  );
}
