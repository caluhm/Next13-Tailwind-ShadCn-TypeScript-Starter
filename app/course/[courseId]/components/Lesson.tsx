import Link from "next/link";
import { CircleIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { fetchCompletionStatus } from "@/app/actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Lesson({
  chapterTitle,
  lesson,
}: {
  chapterTitle: string;
  lesson: { id: string; title: string; format: string };
}) {
  const session = await getServerSession(authOptions);
  const isComplete = await fetchCompletionStatus(lesson.id, session?.user?.id!);
  return (
    <>
      <Link
        href={`/course/lessons/${chapterTitle.toLowerCase()}/${lesson.id}`}
        key={lesson.id}
      >
        <div
          className="text-xl font-medium rounded border w-full py-2 flex flex-row justify-between px-4 items-center hover:bg-foreground hover:text-background cursor-pointer transition-colors ease-in-out duration-300"
          key={lesson.id}
        >
          <div className="flex flex-row gap-2.5 justify-center items-center">
            <p className="text-sm font-medium">{lesson.title}</p>
            <div className="text-xs rounded border px-2 py-1.5">
              {lesson.format.charAt(0).toUpperCase() + lesson.format.slice(1)}
            </div>
          </div>
          <TooltipProvider>
            {isComplete ? (
              <Tooltip>
                <TooltipTrigger>
                  <CheckCircledIcon className="w-7 h-7 text-green-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Lesson is complete!</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip>
                <TooltipTrigger>
                  <CircleIcon className="w-7 h-7 text-muted" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Lesson is incomplete...</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </Link>
    </>
  );
}
