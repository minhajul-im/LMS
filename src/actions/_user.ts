"use server";

import { prisma } from "@/lib/prisma";

export const findAllUsers = async () => {
  const user = await prisma.user.findMany();

  return user;
};
