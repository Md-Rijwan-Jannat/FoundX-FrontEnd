"use client";

import { FC } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Chip } from "@nextui-org/chip";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

const PostDetailsSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      {/* Post and User Info Section */}
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col w-full">
          {/* User Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar name="Loading" />
              <div>
                <Skeleton className="w-32 h-5" />
                <Skeleton className="w-24 h-4" />
              </div>
            </div>
            <Button isIconOnly color="secondary" radius="full" size="sm" />
          </div>
          <Divider className="mb-2" orientation="horizontal" />
          {/* Post Details */}
          <div>
            <Skeleton className="w-20 h-5" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-16" />
          </div>
          {/* Location & Time Info */}
          <div className="flex items-center justify-between">
            <Chip className="text-xs" color="secondary" variant="dot">
              <Skeleton className="w-20 h-5" />
            </Chip>
            <Chip className="text-xs" color="secondary" variant="dot">
              <Skeleton className="w-20 h-5" />
            </Chip>
          </div>
          <Divider className="mb-2" orientation="horizontal" />
          {/* Action Buttons */}
          <div className="flex gap-5">
            <Button className="flex-1" />
            <Button className="flex-1" />
          </div>
        </div>
      </div>

      {/* Verification Questions Section */}
      <div className="my-10">
        <Skeleton className="w-48 h-5" />
        <Divider className="mb-4 mt-1" orientation="horizontal" />
        <div className="flex flex-col items-start justify-start gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-72 h-5" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetailsSkeleton;
