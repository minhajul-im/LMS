"use server";

import { prisma } from "@/lib/prisma";

export const findAllUsers = async () => {
  const user = await prisma.user.findMany();

  console.log(user);
};

export const createUser = async (
  email: string,
  password: string,
  role: "ADMIN" | "USER" = "USER"
) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
      role,
    },
  });

  return user;
};
