import { Component1Icon } from "@radix-ui/react-icons";

export default function CourseSelect() {
  return (
    <div className="relative flex flex-col gap-6 mt-6 px-2 w-[220px] h-min">
      <p className="absolute -mt-6 text-xs text-muted-foreground">Course:</p>
      <div className="flex flex-row gap-2 items-center bg-muted rounded-lg p-4">
        <div className="rounded-lg border border-muted-foreground bg-foreground/10 w-10 h-10 flex justify-center items-center">
          <Component1Icon className="w-6 h-6 text-foreground" />
        </div>
        <span className="font-semibold text-sm">Course Title</span>
      </div>
    </div>
  );
}
