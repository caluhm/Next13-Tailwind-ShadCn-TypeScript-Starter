"use server";

import { PrismaClient } from "@prisma/client";

export async function updateProfile(email: string, name: string) {
  const prisma = new PrismaClient();

  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      name: name,
    },
  });
}
