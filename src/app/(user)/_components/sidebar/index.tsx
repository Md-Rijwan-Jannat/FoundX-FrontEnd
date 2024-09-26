"use client";

import { FC } from "react";
import SidebarOptions from "./sidebarOptions";
import { useUser } from "@/src/context/userProvider";
import { Avatar } from "@nextui-org/avatar";
import envConfig from "@/src/config/envConfig";
import { userLink } from "./constants";
import { Button } from "@nextui-org/button";
import { logout } from "@/src/services/Auth";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoute } from "@/src/constant";
import { IoImageOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { TUser } from "@/src/types";

const Sidebar: FC = () => {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const { profilePhoto, name } = (user as unknown as TUser) || {};

  const handleLogout = async () => {
    await logout();
    await signOut();
    setIsLoading(true);
    if (protectedRoute.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* User Profile Section */}
      <div className="bg-default-50 rounded-md px-2 py-5 max-h-fit">
        <div className="flex flex-col items-center justify-center gap-3">
          <Avatar
            className={`cursor-pointer text-[24px] font-bold ${profilePhoto === envConfig?.default_image ? "bg-secondary text-white" : ""}`}
            name={name?.slice(0, 1)}
            size="lg"
            src={
              profilePhoto !== envConfig?.default_image
                ? profilePhoto
                : undefined
            }
          />

          <Button
            className="text-xs"
            color="secondary"
            radius="full"
            size="sm"
            startContent={<IoImageOutline size={14} />}
            variant="flat"
          >
            Upload Profile
          </Button>
          <h2 className="text-sm text-default-600">{name}</h2>
          <Button
            color="danger"
            size="sm"
            variant="faded"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Sidebar Options */}
      <SidebarOptions sidebarLinks={userLink} />
    </div>
  );
};

export default Sidebar;
