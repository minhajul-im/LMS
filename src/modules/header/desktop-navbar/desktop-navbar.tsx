"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Data, DesktopProps } from "../type";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../components/theme-switcher";
import { buttonVariants } from "@/common/components/ui/button";

export const DesktopNavbar = ({ items, children }: DesktopProps) => {
  const path = usePathname();

  return (
    <ul className="flex items-center gap-6 text-sm">
      {items.map((item: Data) => (
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
        <ThemeSwitcher />
      </li>
      <li>{children}</li>
    </ul>
  );
};
