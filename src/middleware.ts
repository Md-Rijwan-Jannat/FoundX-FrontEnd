import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { currentUser } from "./services/authService";
import { TDecodeUser } from "./types";

type TRoleProps = keyof typeof RoleBasedRoutes;

const RoleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

const AuthPathname = ["/auth/login", "/auth/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = (await currentUser()) as TDecodeUser | undefined;

  console.log("user=>", user);

  // Handle authentication protected route
  if (!user) {
    if (AuthPathname.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/auth/login?redirect=${pathname}`, request.url)
      );
    }
  }
  // Handle role base route
  if (user?.role && RoleBasedRoutes[user?.role as TRoleProps]) {
    const routes = RoleBasedRoutes[user?.role as TRoleProps];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile",
    "/profile/:page*",
    "/admin",
    "/auth/login",
    "/auth/register",
  ],
};
