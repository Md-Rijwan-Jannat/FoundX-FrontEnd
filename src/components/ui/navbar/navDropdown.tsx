"use client";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { FC } from "react";
import NavButton from "./navButton";

type TNavDropdownProps = object;

const NavDropdown: FC<TNavDropdownProps> = () => {
  const router = useRouter();
  const handleNavigation = (pathname: string) => {
    router.push(`/profile/${pathname}`);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="R" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("")}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("about")}>
          About
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("clam-requests")}>
          Clam Requests
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("create-post")}>
          Create Post
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("setting")}>
          Setting
        </DropdownItem>
        <DropdownItem>
          <div className="w-full flex items-center justify-center ">
            <NavButton href="/auth/register" size="sm" />
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavDropdown;
