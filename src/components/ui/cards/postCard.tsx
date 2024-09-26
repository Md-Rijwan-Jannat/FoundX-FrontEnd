"use client";
import { Avatar } from "@nextui-org/avatar";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { TPost, TUser } from "@/src/types";
import { useUser } from "@/src/context/userProvider";
import ImageGallery from "../../modules/foundItem/ImageGallery";
import envConfig from "@/src/config/envConfig";
import ClaimRequestModal from "../modal/claimRequestModal";
import { BsCalendarCheck } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import PostDropdown from "../dropdown/PostDropdown";
import ClaimAuthenticationModal from "../modal/claimAuthenticationModal";
import { useState } from "react";

interface IProps {
  post: TPost;
}

const PostCard = ({ post }: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    title,
    dateFound,
    description,
    location,
    city,
    _id,
    images,
    user,
    questions,
  } = post || {};

  const { name, email, profilePhoto } = (user as TUser) || {};

  const { user: loggedInUser } = useUser();

  const { email: currentUserEmail } = (loggedInUser as unknown as TUser) || {};

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription =
    description.length > 35
      ? description.substring(0, 35) + "..."
      : description;

  return (
    <div className="mb-2 rounded-md bg-default-50 p-4">
      <div className="border-b border-default-200 pb-2">
        <div className="flex items-center justify-between border-b border-default-200 pb-4">
          <div className="flex items-center gap-3">
            <Avatar
              className={`cursor-pointer text-[24px] font-bold ${profilePhoto === envConfig?.default_image ? "bg-secondary text-white" : ""}`}
              name={name?.slice(0, 1)}
              src={
                profilePhoto !== envConfig?.default_image
                  ? profilePhoto
                  : undefined
              }
            />
            <div>
              <p>{name}</p>
              <p className="text-xs">{email}</p>
            </div>
          </div>
          <div>
            <PostDropdown post={post} />
          </div>
        </div>
        <div className="border-b border-default-200 py-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Link href={`/found-items/${_id}`}>
                <h1 className="cursor-pointer text-xl">{title}</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs mt-1">
                <BsCalendarCheck className="mb-0.5" size={14} />
                {" - "}
                {format(new Date(dateFound), "dd MMM, yyyy")}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1 mt-1">
                <LuMapPin width={18} />
                {location}, {city}
              </p>
            </div>
          </div>
          <p>
            {isExpanded ? description : truncatedDescription}{" "}
            {description.length > 35 && (
              <button className="text-default-600" onClick={toggleDescription}>
                {isExpanded ? "See Less" : "See More"}
              </button>
            )}
          </p>
        </div>

        <ImageGallery images={images} />

        <div className="mt-4 flex gap-5">
          {email !== currentUserEmail && (
            <>
              {currentUserEmail ? (
                <ClaimRequestModal id={_id} questions={questions} />
              ) : (
                <ClaimAuthenticationModal itemId={_id} />
              )}
            </>
          )}

          {email !== currentUserEmail && (
            <div className="w-[1px] bg-default-200" />
          )}
          <Button className="flex-1" color="secondary" variant="faded">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
