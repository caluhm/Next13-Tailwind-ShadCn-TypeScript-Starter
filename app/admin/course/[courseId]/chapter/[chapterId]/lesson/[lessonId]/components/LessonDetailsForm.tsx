"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui//button";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { updateChapter, updateLesson } from "@/app/actions";

export default function LessonDetailsForm({
  courseId,
  chapterId,
  lessonId,
  title,
  link,
}: {
  courseId: string;
  chapterId: string;
  lessonId: string;
  title: string;
  link: string;
}) {
  const formSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long."),
    link: z.string().url("Please enter a valid URL."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title ?? "",
      link: link ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    if (
      !values.title ||
      !values.link ||
      (values.link === link && values.title === title)
    )
      return;

    await updateLesson(
      courseId,
      chapterId,
      lessonId,
      values.title,
      values.link,
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormDescription>
                This is the title of your lesson.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormDescription>
                This is the link to the video played in the lesson.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}
