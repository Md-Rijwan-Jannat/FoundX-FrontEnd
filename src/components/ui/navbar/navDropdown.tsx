"use client";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

import NavButton from "./navButton";
import { logout } from "@/src/services/Auth";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "@/src/context/userProvider";
import envConfig from "@/src/config/envConfig";
import { protectedRoute } from "@/src/constant";
import { signOut } from "next-auth/react";

type TNavDropdownProps = object;

const NavDropdown: FC<TNavDropdownProps> = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (pathname: string) => {
    router.push(`/profile/${pathname}`);
  };

  const handleLogout = async () => {
    await logout();
    await signOut();
    setIsLoading(true);
    if (protectedRoute.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <>
      {user?.email ? (
        <Dropdown className="">
          <DropdownTrigger>
            <Avatar
              className={`cursor-pointer text-[24px] font-bold ${user?.profilePhoto === envConfig?.default_image ? "bg-secondary text-default-500" : ""}`}
              name={user?.name?.slice(0, 1)}
              src={
                user?.profilePhoto !== envConfig?.default_image
                  ? user?.profilePhoto
                  : undefined
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
