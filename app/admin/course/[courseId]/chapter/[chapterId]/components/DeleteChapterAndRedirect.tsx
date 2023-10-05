"use client";

import { useState } from "react";
import { deleteChapter } from "@/app/actions";

import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DeleteChapterAndRedirect({
  courseId,
  chapterId,
  title,
}: {
  courseId: string;
  chapterId: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  async function handleDelete() {
    await deleteChapter(courseId, chapterId);

    setIsOpen(false);
  }

  return (
    <>
      <Button variant="destructive" onClick={() => setIsOpen(!isOpen)}>
        Delete Chapter
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Chapter: "{title}"</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this chapter? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="pt-4 flex gap-2.5 sm:gap-0 flex-col">
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={handleDelete}
            >
              Confirm
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
