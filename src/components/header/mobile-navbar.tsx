"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";
import { useMobileMenu } from "@/store";
import { ModeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { LINKS_TYPE, NavProps } from "./navbar";
import { UserSingOut } from "../auth/user-sign-out";

const MobileNavbar = ({ links, children, isSigned }: NavProps) => {
  const path = usePathname();
  const { isOpen, onOpen, onClose } = useMobileMenu();

  let SignOut;
  let SignIn;
  let items = [...links];
  if (isSigned) {
    items.push({ link: "/dashboard", title: "Dashboard" });
    SignOut = (
      <li
        className={`py-3 text-base block transition-transform duration-500 ease-in-out font-semibold text-red-600 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionDelay: `${items.length * 100}ms` }}>
        <UserSingOut />
      </li>
    );
  } else {
    items = links;
    SignIn = (
      <li
        className={`py-3 text-base block transition-transform duration-500 ease-in-out font-semibold ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {children}
      </li>
    );
  }

  return (
    <nav className="md:hidden">
      <section className="relative">
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
        )}
        <div
          className={`fixed top-0 left-0 w-72 sm:w-80 z-50 h-full duration-500  transition-transform ease-in-out bg-background text-foreground  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="mb-4 px-6 pt-6 flex items-center justify-end">
            <Button onClick={onClose} size="icon" variant="outline">
              <X />
            </Button>
          </div>

          <ul className="px-6">
            {isSigned ? children : SignIn}

            {items.map((item: LINKS_TYPE, index: number) => (
              <Link
                href={item.link}
                key={item.title}
                className={`${
                  path === item.link ? "text-green-600" : "text-foreground"
                }`}>
                <li
                  className={`py-3 text-base block transition-transform duration-500 ease-in-out font-semibold ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  {item.title}
                </li>
              </Link>
            ))}
            {SignOut}
          </ul>
        </div>
      </section>

      <div className="flex items-center gap-5">
        <ModeToggle />

        <Button onClick={onOpen} size={"icon"} variant="outline">
          <Menu />
        </Button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
