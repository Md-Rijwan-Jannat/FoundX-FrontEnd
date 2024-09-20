"use client";

import { FC } from "react";
import SidebarOptions from "./sidebarOptions";
import { useUser } from "@/src/context/userProvider";
import { Avatar } from "@nextui-org/avatar";
import envConfig from "@/src/config/envConfig";
import { userLink } from "./constants";
import { Button } from "@nextui-org/button";
import { logout } from "@/src/services/authService";
import { useRouter } from "next/navigation";

const Sidebar: FC = () => {
  const { user, setIsLoading, isLoading } = useUser();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    setIsLoading(true);
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-5">
      {/* User Profile Section */}
      <div className="bg-default-50 rounded-md p-2 max-h-fit">
        <div className="flex flex-col items-center justify-center gap-3">
          <Avatar
            className="cursor-pointer text-secondary text-xl"
            isDisabled={isLoading}
            name={user?.name.slice(0, 1)}
            size="lg"
            src={
              user?.profilePhoto === envConfig?.default_image
                ? ""
                : user?.profilePhoto
            }
          />
          <h2 className="text-sm text-default-500">{user?.name}</h2>
          <Button
            color="danger"
            isLoading={isLoading}
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
