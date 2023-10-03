import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Stats() {
  return (
    <div className="w-full flex flex-col gap-8 mt-6 px-2">
      <div className="border rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold">Course Title</h1>
      </div>
      <div className="bg-foreground rounded-lg flex flex-row w-full justify-between p-4 items-center">
        <div className="text-background">
          <p className="text-sm font-medium">Current Lesson</p>
          <p className="text-xl font-semibold">Lesson 1</p>
        </div>
        <div>
          <Button variant="outline">Resume</Button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <p className="text-sm font-medium">Course Progress</p>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="w-[75%]">
            <Progress value={75} />
          </div>
          <span className="text-sm font-medium">75% complete</span>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-4 border rounded-lg p-6">
        <div className="flex flex-col gap-2 w-1/3">
          <span className="text-muted-foreground text-sm pl-3">Lessons</span>
          <div className="border-t text-sm font-medium pt-3 pl-3">
            <span className="font-bold text-3xl">19 </span>
            of 27
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <span className="text-muted-foreground text-sm pl-3">Quizes</span>
          <div className="border-t text-sm font-medium pt-3 pl-3">
            <span className="font-bold text-3xl">15 </span>
            of 20
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <span className="text-muted-foreground text-sm pl-3">Challenges</span>
          <div className="border-t text-sm font-medium pt-3 pl-3">
            <span className="font-bold text-3xl">33 </span>
            of 80
          </div>
        </div>
      </div>
    </div>
  );
}
