"use client";

import Link from "next/link";

import LoginForm from "./components/LoginForm";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import ErrorMessage from "./components/ErrorMessage";
import Message from "./components/Message";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");
  const message = (
    searchParams?.get("message")?.split("-").join(" ") || ""
  ).replace(/^\w/, (c) => c.toUpperCase());


  return (
    <>
      <main className="h-screen w-full flex items-center justify-center">
        <div className="w-96 ">
          <div className="flex w-full h-full flex-col gap-4">
            <div className="flex flew-row gap-3 justify-start items-center">
              <Link href="/">
                <ArrowLeftIcon className="w-5 h-5 hover:-translate-x-1 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="text-3xl font-semibold">Log In</h1>
            </div>
            {error && <ErrorMessage />}
            {message && <Message message={message} />}
            <div className="py-8 px-8 h-min border rounded-md">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
