import { Component1Icon } from "@radix-ui/react-icons";

export default function CourseItem({
  title,
  selected,
}: {
  title: string;
  selected: boolean;
}) {
  return (
    <div className="flex flex-row gap-2 items-center rounded-lg">
      <div
        className={`rounded-lg border border-muted-foreground ${
          selected ? "bg-indigo-500/50" : "bg-foreground/10"
        } 
        w-10 h-10 flex justify-center items-center`}
      >
        <Component1Icon className="w-6 h-6 text-foreground" />
      </div>
      <span className="font-semibold text-sm">{title}</span>
    </div>
  );
}
