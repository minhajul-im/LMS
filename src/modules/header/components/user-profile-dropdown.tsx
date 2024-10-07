import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/common/components/ui/dropdown-menu";
import { UserSingOutButton } from "./user-sign-out-button";

export const UserProfileDropdown = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
          <UserSingOutButton />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
