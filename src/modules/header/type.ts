import React from "react";
import type { Session } from "next-auth";

export type UserImage = {
  name: string;
  image: string;
};
export type Data = {
  title: string;
  link: string;
};
export type DesktopProps = {
  items: Data[];
  children: React.ReactNode | null;
};
export type MobileProps = {
  items: Data[];
  session: Session | null;
  children: React.ReactNode | null;
};
