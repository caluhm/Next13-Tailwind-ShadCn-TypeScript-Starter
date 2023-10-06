import Link from "next/link";
import { CircleIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { fetchCompletionStatus } from "@/app/actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Lesson({
  chapterTitle,
  lesson,
}: {
  chapterTitle: string;
  lesson: { id: string; title: string };
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
          <p className="text-sm font-medium">{lesson.title}</p>
          {isComplete ? (
            <CheckCircledIcon className="w-7 h-7 text-green-600" />
          ) : (
            <CircleIcon className="w-7 h-7 text-muted" />
          )}
        </div>
      </Link>
    </>
  );
}
