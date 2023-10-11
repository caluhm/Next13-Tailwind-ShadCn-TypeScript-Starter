"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function updateProfile(
  email: string,
  username: string,
  name: string,
) {
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      name: name,
      username: username,
    },
  });

  return user;
}

export async function createCourse(title: string, description: string) {
  const course = await prisma.course.create({
    data: {
      title: title,
      description: description,
    },
  });

  revalidatePath("/admin");

  return course;
}

export async function deleteCourse(id: string) {
  const course = await prisma.course.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateCourse(
  id: string,
  title: string,
  description: string,
) {
  const course = await prisma.course.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
    },
  });

  revalidatePath(`/admin/course/${id}`);

  return course;
}

export async function createChapter(
  courseId: string,
  title: string,
  description: string,
) {
  const chapter = await prisma.chapter.create({
    data: {
      courseId: courseId,
      title: title,
      description: description,
    },
  });

  revalidatePath(`/admin/course/${courseId}`);

  return chapter;
}

export async function updateChapter(
  courseId: string,
  chapterId: string,
  title: string,
  description: string,
) {
  const chapter = await prisma.chapter.update({
    where: {
      id: chapterId,
    },
    data: {
      title: title,
      description: description,
    },
  });

  revalidatePath(`/admin/course/${courseId}/chapter/${chapterId}`);

  return chapter;
}

export async function deleteChapter(courseId: string, chapterId: string) {
  const chapter = await prisma.chapter.delete({
    where: {
      id: chapterId,
    },
  });

  redirect(`/admin/course/${courseId}`);

  return chapter;
}

export async function fetchAllCourses() {
  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return courses;
}

export async function fetchCourseById(id: string) {
  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
  });

  return course;
}

export async function fetchChapterById(id: string) {
  const chapter = await prisma.chapter.findUnique({
    where: {
      id: id,
    },
  });

  return chapter;
}

export async function fetchLessonById(id: string) {
  const lesson = await prisma.lesson.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  return lesson;
}

export async function fetchChaptersByCourseId(id: string) {
  const chapters = await prisma.chapter.findMany({
    where: {
      courseId: id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return chapters;
}

export async function createLesson(
  courseId: string,
  chapterId: string,
  title: string,
  link: string,
  format: string,
) {
  const lesson = await prisma.lesson.create({
    data: {
      chapterId: chapterId,
      title: title,
      link: link,
      format: format,
    },
  });

  revalidatePath(`/admin/course/${courseId}/chapter/${chapterId}`);

  return lesson;
}

export async function deleteLesson(
  courseId: string,
  chapterId: string,
  lessonId: string,
) {
  const lesson = await prisma.lesson.delete({
    where: {
      id: lessonId,
    },
  });

  revalidatePath(`/admin/course/${courseId}/chapter/${chapterId}`);
  redirect(`/admin/course/${courseId}/chapter/${chapterId}`);

  return lesson;
}

export async function updateLesson(
  courseId: string,
  chapterId: string,
  lessonId: string,
  title: string,
  link: string,
  format: string,
) {
  const lesson = await prisma.lesson.update({
    where: {
      id: lessonId,
    },
    data: {
      title: title,
      link: link,
      format: format,
    },
  });

  revalidatePath(
    `/admin/course/${courseId}/chapter/${chapterId}/lesson/${lessonId}`,
  );

  return lesson;
}

export async function fetchLessonsByChapterId(id: string) {
  const lesson = await prisma.lesson.findMany({
    where: {
      chapterId: id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return lesson;
}

export async function fetchFirstCourse() {
  const course = await prisma.course.findFirst({
    orderBy: {
      createdAt: "asc",
    },
  });

  return course;
}

export async function fetchCompletionStatus(lessonId: string, userId: string) {
  const completion = await prisma.userProgress.findUnique({
    where: {
      userId_lessonId: {
        lessonId: lessonId,
        userId: userId,
      },
    },
  });

  return completion?.isCompleted;
}

export async function setCompletionStatus(
  lessonId: string,
  userId: string,
  chapter: string,
) {
  const completion = await prisma.userProgress.upsert({
    where: {
      userId_lessonId: {
        lessonId: lessonId,
        userId: userId,
      },
    },
    update: {
      isCompleted: true,
    },
    create: {
      userId: userId,
      lessonId: lessonId,
      isCompleted: true,
    },
  });

  revalidatePath(`/course/lessons/${chapter}/${lessonId}`);

  return completion;
}

export async function countTotalLessonsByChapterId(chapterId: string) {
  const count = await prisma.lesson.count({
    where: {
      chapterId: chapterId,
    },
  });

  return count;
}

export async function countTotalLessonsCompletedByChapterId(
  chapterId: string,
  userId: string,
) {
  const count = await prisma.userProgress.count({
    where: {
      lesson: {
        chapterId: chapterId,
      },
      userId: userId,
      isCompleted: true,
    },
  });

  return count;
}

export async function countTotalLessonsByCourseId(courseId: string) {
  const count = await prisma.lesson.count({
    where: {
      chapter: {
        courseId: courseId,
      },
    },
  });

  return count;
}

export async function countTotalLessonsCompletedByCourseId(
  courseId: string,
  userId: string,
) {
  const count = await prisma.userProgress.count({
    where: {
      lesson: {
        chapter: {
          courseId: courseId,
        },
      },
      userId: userId,
      isCompleted: true,
    },
  });

  return count;
}
