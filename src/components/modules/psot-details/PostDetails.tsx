"use client";

import { TPost, TUser } from "@/src/types";
import { FC } from "react";
import PostSlider from "./PostSlider";
import { formatDistanceToNow } from "date-fns";
import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import envConfig from "@/src/config/envConfig";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import ClaimRequestModal from "../../ui/modal/claimRequestModal";
import { motion } from "framer-motion";
import {
  fadeIn,
  pageVariants,
  staggeredChild,
  staggeredContainer,
} from "@/src/styles/animation";
import PostDropdown from "../../ui/dropdown/PostDropdown";

type TPostDetailsProps = {
  post: TPost;
};

const PostDetails: FC<TPostDetailsProps> = ({ post }) => {
  const {
    title,
    dateFound,
    description,
    location,
    city,
    _id,
    images,
    user = {} as TUser,
    category,
    questions,
  } = post || {};

  const { name, email, profilePhoto } = user;

  // Utility to render verification questions
  const renderQuestions = () =>
    questions.map((question, index) => (
      <Chip key={index} color="secondary" variant="dot">
        {question}
      </Chip>
    ));

  return (
    <motion.div
      animate="visible"
      className="flex flex-col gap-10"
      exit="exit"
      initial="hidden"
      variants={pageVariants}
    >
      {/* Post and User Info Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-5"
        variants={fadeIn}
      >
        <PostSlider images={images} />
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <Avatar
                className={`cursor-pointer text-[24px] font-bold ${
                  profilePhoto === envConfig?.default_image
                    ? "bg-secondary text-default-500"
                    : ""
                }`}
                name={name?.[0]}
                src={
                  profilePhoto !== envConfig?.default_image
                    ? profilePhoto
                    : undefined
                }
              />
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-xs">{email}</p>
              </div>
            </div>
            <PostDropdown post={post} />
          </div>
          <Divider className="mb-2" orientation="horizontal" />
          {/* Post Details */}
          <div>
            <span className="text-violet-600 font-semibold text-sm">
              {category?.name}
            </span>
            <h1 className="font-bold text-xl text-default-800">{title}</h1>
          </div>
          <p className="text-default-700 text-sm">{description}</p>
          {/* Location & Time Info */}
          <div className="flex items-center justify-between">
            <Chip className="text-xs" color="secondary" variant="dot">
              Found {formatDistanceToNow(new Date(dateFound))} ago
            </Chip>
            <Chip className="text-xs" color="secondary" variant="dot">
              {location}, {city}
            </Chip>
          </div>
          <Divider className="mb-2" orientation="horizontal" />
          {/* Action Buttons */}
          <div className="flex gap-5">
            <ClaimRequestModal id={_id} questions={questions} />
            <Button className="flex-1" color="secondary" variant="faded">
              Share
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Verification Questions Section */}
      <motion.div
        animate="visible"
        className="my-10"
        initial="hidden"
        variants={staggeredContainer}
      >
        <h2 className="text-default-700 text-sm">
          Owner verification questions
        </h2>
        <Divider className="mb-4 mt-1" orientation="horizontal" />
        <div className="flex flex-col items-start justify-start gap-2">
          {renderQuestions().map((question, index) => (
            <motion.div key={index} variants={staggeredChild}>
              {question}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PostDetails;
