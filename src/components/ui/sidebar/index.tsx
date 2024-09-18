"use client";

import { FC } from "react";
import SidebarOptions from "./sidebarOptions";
import { userLink } from "./consttants";
import { useUser } from "@/src/context/userProvider";
import { Avatar } from "@nextui-org/avatar";
import envConfig from "@/src/config/envConfig";

type TSidebarProps = object;

const Sidebar: FC<TSidebarProps> = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-default-50 rounded-md p-2 max-h-fit">
        <div className="flex flex-col items-center justify-center gap-3">
          <Avatar
            className="cursor-pointer text-secondary text-xl"
            name={user?.name.slice(0, 1)}
            size="lg"
            src={
              (envConfig?.default_image as string) ===
              (user?.profilePhoto as string)
                ? ""
                : (user?.profilePhoto as string)
            }
          />
          <h2 className="text-sm text-default-500">{user?.name}</h2>
        </div>
      </div>
      <div>
        <SidebarOptions sidebarLink={userLink} />
      </div>
    </div>
  );
};

export default Sidebar;
