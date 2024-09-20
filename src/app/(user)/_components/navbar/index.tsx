import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { ThemeSwitch } from "@/src/components/ui/theme-switch";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Logo from "@/src/components/ui/logo";

export const ProfileNavbar = () => {
  return (
    <NextUINavbar className="h-[5rem] md:h-[4rem]" maxWidth="xl">
      {/* Left Section: Brand and Logo */}
      <NavbarContent className="justify-start -ml-3 md:-ml-0">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      {/* Right Section: Theme Switch and Navigation */}
      <NavbarContent
        className="flex items-center gap-3 -mr-3 md:-mr-0"
        justify="end"
      >
        {/* Theme Switch */}
        <NavbarItem className="flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {/* Home Button */}
        <NavbarItem>
          <Button as={Link} color="secondary" href="/" variant="faded">
            Home
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
