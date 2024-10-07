"use server";

import { signIn, signOut } from "@/auth";

export const signInWithSocial = async (formData: FormData) => {
  const action = formData.get("action") as string;
  await signIn(action, { redirectTo: "/dashboard" });
};

export const signOutWithSocial = async () => {
  await signOut({ redirectTo: "/" });
};
