import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Link from "next/link";
import { UserSingOut } from "./user-sign-out";

export const UserProfile = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center my-2">
          Profile
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/dashboard">
          <DropdownMenuLabel className="text-center my-2 font-normal text-base hover:underline duration-100">
            Dashboard
          </DropdownMenuLabel>
        </Link>

        <DropdownMenuLabel className="text-center my-2 font-normal text-base hover:underline duration-100 text-red-600">
          <UserSingOut />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
