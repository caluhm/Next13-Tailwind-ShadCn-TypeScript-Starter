import { Chapters } from "@/lib/lessons";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

import { CheckCircledIcon, CircleIcon } from "@radix-ui/react-icons";
import Lessons from "./Lessons";
import Chapter from "./Chapter";

export default function LessonSelect({
  chapters,
}: {
  chapters: { id: string; title: string; description: string }[];
}) {
  return (
    <aside className="max-h-[750px] overflow-auto px-2 mt-8 lg:mt-0">
      <div className="sticky top-0 left-0 w-full h-6 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="flex flex-col gap-4">
        {chapters.map((chapter) => (
          <Chapter chapter={chapter} key={chapter.id} />
        ))}
      </div>
      <div className="sticky bottom-[-1px] left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </aside>
  );
}
