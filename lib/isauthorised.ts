import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function canViewCourse() {
  const session = await getServerSession(authOptions);

  if (!session?.user || session?.user?.role === "user") {
    redirect("/");
  }
}

export async function isAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user || session?.user?.role !== "admin") {
    redirect("/");
  }
}
