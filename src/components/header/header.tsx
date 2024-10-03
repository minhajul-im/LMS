import Link from "next/link";
import { auth } from "@/auth";
import { Navbar } from "./navbar";
import MobileNavbar from "./mobile-navbar";
import { navData } from "@/utils/constant";
import { GraduationCap } from "lucide-react";
import { signInWithSocial } from "@/actions/_auth";
import { UserProfile } from "../auth/user-profile";
import { UserSigned, UserSignIn } from "../auth/user-sign-in";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="border-b shadow-lg md:sticky md:top-0 md:backdrop-blur-md z-40">
      <header className="container mx-auto px-4 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 justify-start md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-300" href="/">
              <span className="sr-only">LMS</span>
              <GraduationCap size={40} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <Navbar links={navData}>
                {session ? (
                  <UserProfile>
                    <UserSigned
                      image={session?.user?.image as string}
                      name={session?.user?.name as string}
                    />
                  </UserProfile>
                ) : (
                  <UserSignIn />
                )}
              </Navbar>
            </nav>
            <MobileNavbar
              links={navData}
              isSigned={session?.user ? true : false}>
              {session ? (
                <li className="py-2 flex justify-start gap-1 flex-col">
                  <UserSigned
                    image={session?.user?.image as string}
                    name={session?.user?.name as string}
                  />
                  <span className="text-base pb-1 pt-3">
                    {session?.user?.name as string}
                  </span>
                  <span className="text-xs text-muted-foreground italic">
                    {session?.user?.email as string}
                  </span>
                </li>
              ) : (
                <form action={signInWithSocial}>
                  <button type="submit" name="action" value="google">
                    Sign in
                  </button>
                </form>
              )}
            </MobileNavbar>
          </div>
        </div>
      </header>
    </header>
  );
};
