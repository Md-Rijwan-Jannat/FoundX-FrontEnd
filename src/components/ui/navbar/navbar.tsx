import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "../theme-switch";
import { searchInput } from "./searchInput";
import SearchModal from "./searchModal";
import Logo from "../logo";
import { Avatar } from "@nextui-org/avatar";
import NavLink from "./navLink";
import NavDropdown from "./navDropdown";
import { IoSearch } from "react-icons/io5";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
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
        className="hidden sm:flex basis-1/5 sm:basis-full"
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
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavDropdown />
        <NavbarMenuToggle className="text-secondary" />
      </NavbarContent>

      {/* Navbar Menu for Mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
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
