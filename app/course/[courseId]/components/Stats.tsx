import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Stats({
  courseId,
  title,
  description,
}: {
  courseId?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-8 mt-6 px-2">
      <div className="border border-foreground rounded-lg px-6 py-12 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium">{description}</p>
      </div>
      <div className="bg-muted rounded-lg flex flex-row w-full justify-between p-4 items-center">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Current Lesson
          </p>
          <p className="text-xl font-bold text-foreground">Lesson 7</p>
        </div>
        <Link href="/course/lessons/html/7">
          <Button variant="default">Resume</Button>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-2">
        <p className="text-sm font-medium">Course Progress</p>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="w-[75%]">
            <Progress value={33} />
          </div>
          <span className="text-sm font-medium">33% complete</span>
        </div>
      </div>
    </div>
  );
}
