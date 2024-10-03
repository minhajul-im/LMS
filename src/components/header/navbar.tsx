"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

export type LINKS_TYPE = {
  title: string;
  link: string;
};

export type NavProps = {
  children: React.ReactNode | null;
  links: LINKS_TYPE[];
  isSigned?: boolean;
};

export const Navbar = ({ links, children }: NavProps) => {
  const path = usePathname();

  return (
    <ul className="flex items-center gap-6 text-sm">
      {links.map((item: LINKS_TYPE) => (
        <li key={item?.title}>
          <Link
            href={item.link}
            className={cn(
              buttonVariants({ variant: "link" }),
              path === item.link ? "text-green-600" : "text-foreground"
            )}>
            {item.title}
          </Link>
        </li>
      ))}

      <li>
        <ModeToggle />
      </li>
      <li>{children}</li>
    </ul>
  );
};
