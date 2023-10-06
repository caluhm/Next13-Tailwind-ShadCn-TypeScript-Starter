import { Component1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function CourseItem({
  id,
  title,
  selected,
}: {
  id: string;
  title: string;
  selected: boolean;
}) {
  return (
    <Link href={`/course/${id}`}>
      <div className="flex flex-row gap-2 items-center rounded-lg hover:bg-indigo-500/30 transition-colors ease-in-out duration-300">
        <div
          className={`rounded-lg border-2 bg-foreground/10 ${
            selected ? "border-indigo-500/50" : "border-muted-foreground"
          } 
        w-10 h-10 flex justify-center items-center`}
        >
          <Component1Icon className="w-6 h-6 text-foreground" />
        </div>
        <span className="font-semibold text-sm">{title}</span>
      </div>
    </Link>
  );
}
