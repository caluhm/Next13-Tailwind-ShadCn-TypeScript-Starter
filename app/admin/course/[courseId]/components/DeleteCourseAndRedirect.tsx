"use client";

import { useState } from "react";
import { deleteCourse } from "@/app/actions";

import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DeleteCourseAndRedirect({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  async function handleDelete() {
    await deleteCourse(id);

    setIsOpen(false);
  }

  return (
    <>
      <Button variant="destructive" onClick={() => setIsOpen(!isOpen)}>
        Delete Course
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Course: "{title}"</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this course? This action cannot be
              undone.
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
