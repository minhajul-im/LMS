import { auth } from "./auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route: string) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!session && isProtected) {
    const originUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(originUrl.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
