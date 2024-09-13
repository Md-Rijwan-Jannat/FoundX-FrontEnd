import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type TRole = keyof typeof RoleBasedRoutes;

const RoleBasedRoutes = {
  USER: [/^\/profile$/],
  ADMIN: [/^\/admin/],
};

const AuthPathname = ["/auth/login", "/auth/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const user = {
  //   name: "Md Rijwan",
  //   token: "token",
  //   role: "USER",
  // };

  const user = undefined;

  // Handle authentication protected route
  if (!user) {
    if (AuthPathname.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  // Handle role base route
  if (user?.role && RoleBasedRoutes[user?.role as TRole]) {
    const routes = RoleBasedRoutes[user?.role as TRole];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin", "/auth/login", "/auth/register"],
};
