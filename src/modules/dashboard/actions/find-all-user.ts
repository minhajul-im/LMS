"use server";

import { prisma } from "@/lib/prisma";

export const findAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const findSingleUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  return user;
};
