import { Chapters } from "@/lib/lessons";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

import { CheckCircledIcon, CircleIcon } from "@radix-ui/react-icons";
import Lessons from "./Lessons";

export default function LessonSelect({
  chapters,
}: {
  chapters: { id: string; title: string; description: string }[];
}) {
  return (
    <aside className="max-h-[750px] overflow-auto px-2">
      <div className="sticky top-0 left-0 w-full h-6 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="flex flex-col gap-4">
        {chapters.map((chapter) => (
          <div
            className="grid gap-2 text-center p-4 rounded-lg border"
            key={chapter.id}
          >
            <div className="w-full flex flex-row justify-between items-center pb-2">
              <header className="text-xl font-bold">{chapter.title}</header>
              <div>
                <div className="flex flex-row w-full gap-2 items-center">
                  <div className="w-20">
                    <Progress value={50} />
                  </div>
                  <span className="text-sm font-medium">50%</span>
                </div>
              </div>
            </div>
            <Lessons chapter={chapter} />
          </div>
        ))}
      </div>
      <div className="sticky bottom-[-1px] left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </aside>
  );
}
