import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "../theme-switch";
import Logo from "../logo";

import NavLink from "./navLink";
import NavDropdown from "./navDropdown";

import { siteConfig } from "@/src/config/site";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/utils/authOptions";

export const Navbar = async () => {
  const user = await getServerSession(authOptions);

  console.log("Session social user data=>", user);

  return (
    <NextUINavbar className="h-[5rem] md:h-[4rem]" maxWidth="xl">
      {/* Left Section: Brand and Links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Logo />
        </NavbarBrand>
        {/* Navbar links visible only on large screens */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NavLink item={item} />
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full max-w-fit"
        justify="end"
      >
        {/* Theme Switch - Visible only on large screens */}
        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {/* Avatar for the user */}
        <NavbarItem className="hidden lg:flex">
          <NavDropdown />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Section: ThemeSwitch, SearchModal, NavButton, and Avatar */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <NavDropdown />
        </NavbarItem>
        <NavbarItem>
          <NavbarMenuToggle className="text-secondary" />
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Menu for Mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-7 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink item={item} />
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
