"use client";

import { FC, useCallback } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TPost } from "@/src/types";
import { Button } from "@nextui-org/button";
import envConfig from "@/src/config/envConfig";
import { useRouter } from "next/navigation";
import { useUser } from "../../../context/userProvider";

type TPostDropdownProps = {
  post: TPost;
};

const PostDropdown: FC<TPostDropdownProps> = ({ post }) => {
  const { user: currentUser } = useUser();
  const router = useRouter();
  const { _id, user } = post || {};

  // Function to copy the post link
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(`${envConfig.baseUrl}/found-items/${_id}`);
  }, [_id]);

  // Handle navigate
  const handleNavigate = useCallback(() => {
    router.push(`/found-items/${_id}`);
  }, [_id, router]);

  return (
    <div className="flex flex-col gap-10">
      {/* Other components */}

      {/* Dropdown Menu Button */}
      <div>
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              color="secondary"
              radius="full"
              size="sm"
              startContent={<BsThreeDotsVertical size={16} />}
              variant="flat"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Post Actions">
            <DropdownItem key="view-details" onClick={handleNavigate}>
              View Details
            </DropdownItem>
            <DropdownItem key="copy" onClick={copyToClipboard}>
              Copy Link
            </DropdownItem>
            <DropdownItem
              className={`${user?.email !== currentUser?.email && "hidden"}`}
              key="edit"
            >
              Edit Post
            </DropdownItem>
            <DropdownItem
              key="report"
              className="text-danger"
              color="danger"
              variant="flat"
            >
              Report Post
            </DropdownItem>
            <DropdownItem
              key="delete"
              className={`text-danger ${user?.email !== currentUser?.email && "hidden"}`}
              color="danger"
              variant="flat"
            >
              Delete Post
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Other components */}
    </div>
  );
};

export default PostDropdown;
