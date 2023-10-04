import { Chapters } from "@/lib/lessons";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

import {
  CheckCircledIcon,
  CircleIcon
} from "@radix-ui/react-icons";

export default function LessonSelect() {
  return (
    <aside className="max-h-[750px] overflow-auto px-2">
      <div className="sticky top-0 left-0 w-full h-6 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="flex flex-col gap-4">
        {Chapters.map(
          (chapter: {
            id: number;
            title: string;
            completed: number;
            lessons: {
              id: number;
              title: string;
              complete: boolean;
            }[];
          }) => (
            <div
              className="grid gap-2 text-center p-4 rounded-lg border"
              key={chapter.id}
            >
              <div className="w-full flex flex-row justify-between items-center pb-2">
                <header className="text-xl font-bold">{chapter.title}</header>
                <div>
                  <div className="flex flex-row w-full gap-2 items-center">
                    <div className="w-20">
                      <Progress value={chapter.completed} />
                    </div>
                    <span className="text-sm font-medium">
                      {chapter.completed}%
                    </span>
                  </div>
                </div>
              </div>
              {chapter.lessons.map(
                (lesson: { id: number; title: string; complete: boolean }) => (
                  <Link
                    href={`/course/lessons/${chapter.title.toLowerCase()}/${
                      lesson.id
                    }`}
                    key={lesson.id}
                  >
                    <div
                      className="text-xl font-medium rounded border w-full py-2 flex flex-row justify-between px-4 items-center hover:bg-foreground hover:text-background cursor-pointer transition-colors ease-in-out duration-300"
                      key={lesson.id}
                    >
                      <p className="text-sm font-medium">{lesson.title}</p>
                      {lesson.complete ? (
                        <CheckCircledIcon className="w-7 h-7 text-green-500" />
                      ) : (
                        <CircleIcon className="w-7 h-7 text-muted" />
                      )}
                    </div>
                  </Link>
                ),
              )}
            </div>
          ),
        )}
      </div>
      <div className="sticky bottom-[-1px] left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </aside>
  );
}
