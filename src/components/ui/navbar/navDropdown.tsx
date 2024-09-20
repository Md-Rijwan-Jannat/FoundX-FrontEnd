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
import { logout } from "@/src/services/authService";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "@/src/context/userProvider";
import envConfig from "@/src/config/envConfig";

type TNavDropdownProps = object;

const NavDropdown: FC<TNavDropdownProps> = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(`/profile/${pathname}`);
  };

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  return (
    <>
      {user?.email ? (
        <Dropdown className="">
          <DropdownTrigger>
            <Avatar
              className="cursor-pointer text-secondary text-xl"
              name={user?.name.slice(0, 1)}
              src={
                (envConfig?.default_image as string) ===
                (user?.profilePhoto as string)
                  ? ""
                  : (user?.profilePhoto as string)
              }
            />
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
            <DropdownItem
              startContent={
                <FaSignOutAlt className="text-secondary-500" size={20} />
              }
              onClick={handleLogout}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <NavButton
          endIcon={<FaSignInAlt className="text-secondary-500" size={20} />}
          label="Login"
          size="sm"
          onClick={() => router.push("/auth/login")}
        />
      )}
    </>
  );
};

export default NavDropdown;
