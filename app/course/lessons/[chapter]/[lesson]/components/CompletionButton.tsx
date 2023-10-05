"use client";

import { setCompletionStatus } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function CompletionButton({
  isCompleted,
  lessonId,
  userId,
  chapter,
}: {
  isCompleted: boolean;
  lessonId: string;
  userId: string;
  chapter: string;
}) {
  return (
    <>
      <Button
        variant="default"
        size="default"
        className="absolute -mt-14"
        onClick={() => {
          setCompletionStatus(lessonId, userId, chapter);
        }}
        disabled={isCompleted}
      >
        {!isCompleted ? (
          <span className="flex">
            Mark as Complete <CheckCircledIcon className="w-5 h-5 ml-2" />
          </span>
        ) : (
          <span className="flex">
            Lesson Completed <CheckCircledIcon className="w-5 h-5 ml-2" />
          </span>
        )}
      </Button>
    </>
  );
}
