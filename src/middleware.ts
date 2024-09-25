import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { currentUser } from "./services/Auth";
import { TDecodeUser } from "./types";
import { cookies } from "next/headers";

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

  const accessToken = cookies().get("accessToken");
  const refreshToken = cookies().get("refreshToken");

  // Handle authentication protected route
  if (!user && !accessToken && !refreshToken) {
    const isAuthPage = AuthPathname.includes(pathname);

    if (!isAuthPage) {
      return NextResponse.redirect(
        new URL(`/auth/login?redirect=${pathname}`, request.url)
      );
    }

    return NextResponse.next();
  }

  if (
    user?.role &&
    accessToken &&
    refreshToken &&
    RoleBasedRoutes[user?.role as TRoleProps]
  ) {
    const routes = RoleBasedRoutes[user?.role as TRoleProps];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:page*",
    "/admin",
    "/auth/login",
    "/auth/register",
  ],
};
