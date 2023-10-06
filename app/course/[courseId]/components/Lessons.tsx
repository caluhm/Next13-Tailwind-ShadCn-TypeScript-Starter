import { fetchLessonsByChapterId } from "@/app/actions";
import Lesson from "./Lesson";

export default async function Lessons({
  chapter,
}: {
  chapter: { id: string; title: string; description: string };
}) {
  const lessons = await fetchLessonsByChapterId(chapter.id);
  return (
    <>
      {lessons.map((lesson) => (
        <Lesson chapterTitle={chapter.title} lesson={lesson} key={lesson.id} />
      ))}
    </>
  );
}
