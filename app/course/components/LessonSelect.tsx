import { Lessons } from "./lessons";
import { Progress } from "@/components/ui/progress";

export default function LessonSelect() {
  return (
    <aside className="max-h-[750px] overflow-auto px-2">
      <div className="sticky top-0 left-0 w-full h-6 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="flex flex-col gap-8">
        <div className="grid gap-2 text-center p-4 rounded-lg border">
          <div className="w-full flex flex-row justify-between items-center pb-2">
            <header className="text-xl font-bold">Welcome</header>
            <div>
              <div className="flex flex-row w-full gap-2 items-center">
                <div className="w-20">
                  <Progress value={100} />
                </div>
                <span className="text-sm font-medium">100%</span>
              </div>
            </div>
          </div>
          {Lessons.map((lesson: { id: number; title: string }) => (
            <div
              className="text-xl font-medium rounded border w-full py-2 flex flex-row justify-between px-4 items-center"
              key={lesson.id}
            >
              <p className="text-sm font-medium">{lesson.title}</p>
              <div className="rounded-full border w-7 h-7"></div>
            </div>
          ))}
        </div>
        <div className="grid gap-2 text-center p-4 rounded-lg border">
          <div className="w-full flex flex-row justify-between items-center pb-2">
            <header className="text-xl font-bold">Algorithms</header>
            <div>
              <div className="flex flex-row w-full gap-2 items-center">
                <div className="w-20">
                  <Progress value={66} />
                </div>
                <span className="text-sm font-medium">66%</span>
              </div>
            </div>
          </div>
          {Lessons.map((lesson: { id: number; title: string }) => (
            <div
              className="text-xl font-medium rounded border w-full py-2 flex flex-row justify-between px-4 items-center"
              key={lesson.id}
            >
              <p className="text-sm font-medium">{lesson.title}</p>
              <div className="rounded-full border w-7 h-7"></div>
            </div>
          ))}
        </div>
        <div className="grid gap-2 text-center p-4 rounded-lg border">
          <div className="w-full flex flex-row justify-between items-center pb-2">
            <header className="text-xl font-bold">Databases</header>
            <div>
              <div className="flex flex-row w-full gap-2 items-center">
                <div className="w-20">
                  <Progress value={0} />
                </div>
                <span className="text-sm font-medium">0%</span>
              </div>
            </div>
          </div>
          {Lessons.map((lesson: { id: number; title: string }) => (
            <div
              className="text-xl font-medium rounded border w-full py-2 flex flex-row justify-between px-4 items-center"
              key={lesson.id}
            >
              <p className="text-sm font-medium">{lesson.title}</p>
              <div className="rounded-full border w-7 h-7"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-[-1px] left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </aside>
  );
}
