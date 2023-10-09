"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function BackButton() {
  const router = useRouter();
  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        type="button"
        className="absolute left-0 top-0 ml-2.5 mt-2.5 sm:ml-5 sm:mt-5"
        onClick={() => router.back()}
      >
        <span className="flex">
          <ChevronLeftIcon className="w-5 h-5 mr-2" /> Back
        </span>
      </Button>
    </>
  );
}
