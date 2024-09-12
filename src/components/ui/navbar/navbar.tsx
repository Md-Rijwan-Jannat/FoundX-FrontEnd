"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { siteConfig } from "@/src/config/site";
import { FaSignInAlt } from "react-icons/fa";
import { ThemeSwitch } from "../theme-switch";
import { searchInput } from "./searchInput";
import SearchModal from "./searchModal";
import Logo from "../logo";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Logo />
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={`${
                  pathname === item.href
                    ? "text-secondary font-semibold"
                    : `text-default-700`
                }  transition-colors duration-500`}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            className="text-sm font-normal text-default-600 bg-default-100"
            endContent={<FaSignInAlt size={22} className="text-secondary" />}
            variant="flat"
            onClick={() => router.push("/auth/register")}
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <SearchModal />
        <Button
          className="text-sm font-normal text-default-600 bg-default-100 hidden md:flex lg:hidden"
          endContent={<FaSignInAlt size={22} className="text-secondary" />}
          onClick={() => router.push("/auth/register")}
          variant="flat"
        >
          Register
        </Button>
        <NavbarMenuToggle className="text-secondary" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`${
                  pathname === item.href
                    ? "text-secondary font-semibold"
                    : "text-default-700"
                }  transition-colors duration-500`}
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <Button
          className="text-sm font-normal text-default-600 bg-default-100 flex md:hidden w-[100px]"
          size="sm"
          endContent={<FaSignInAlt size={22} className="text-secondary" />}
          onClick={() => router.push("/auth/register")}
          variant="flat"
        >
          Register
        </Button>
      </NavbarMenu>
    </NextUINavbar>
  );
};
