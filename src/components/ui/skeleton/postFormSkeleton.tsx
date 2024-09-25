"use client";

import { FC } from "react";
import { Divider } from "@nextui-org/divider";
import NavBlurEffect from "../../ui/navbar/navBlurEffect";
import { FaPlus } from "react-icons/fa";
import { Skeleton } from "@nextui-org/skeleton";

const PostFormSkeleton: FC = () => {
  return (
    <div>
      <NavBlurEffect
        height="h-[100px]"
        maxWidth="mx-w-5xl relative -top-[100px]"
      />
      <div className="space-y-3 w-full px-4 py-6 border border-default-50 rounded-lg bg-gradient-to-b from-default-100">
        <h2 className="text-default-700 text-sm">Create post</h2>
        <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

        {/* Flex container for inputs */}
        <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:flex-1">
            <Skeleton className="h-12" />
          </div>
          <div className="md:flex-1">
            <Skeleton className="h-12" />
          </div>
        </div>

        {/* Flex container for inputs */}
        <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:flex-1">
            <Skeleton className="h-12" />
          </div>
          <div className="md:flex-1">
            <Skeleton className="h-12" />
          </div>
        </div>

        {/* Category and Upload */}
        <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:flex-1">
            <Skeleton className="h-12" />
          </div>
          <div className="md:flex-1">
            <Skeleton className="h-12" />
          </div>
        </div>

        {/* Upload image placeholders */}
        <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
          <div className="flex items-center gap-3 flex-wrap">
            <Skeleton className="w-[100px] h-[80px]" />
            <Skeleton className="w-[100px] h-[80px]" />
          </div>
        </div>

        {/* Description */}
        <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
          <div className="md:flex-1">
            <Skeleton className="h-48" />
          </div>
        </div>

        <Divider className="my-2" />

        {/* Questions section */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-default-700 text-sm">
            Owner verifications questions
          </h2>
          <button className="flex items-center justify-center h-8 w-8 border rounded-full border-dashed border-default-400">
            <FaPlus className="text-default-600" size={14} />
          </button>
        </div>

        {/* Dynamic question placeholders */}
        <div className="flex flex-row items-center justify-between mb-3">
          <div className="flex-1 mr-2">
            <Skeleton className="h-12" />
          </div>
          <button className="flex items-center justify-center h-8 w-8 border rounded-full border-dashed border-default-400">
            <FaPlus className="text-default-600" size={14} />
          </button>
        </div>

        <Divider className="my-2" />

        {/* Submit button */}
        <div className="flex items-end justify-end">
          <Skeleton className="h-12 w-[100px]" />
        </div>
      </div>
      <NavBlurEffect
        height="h-[200px]"
        maxWidth="mx-w-5xl relative -mt-[100px] right-0"
      />
    </div>
  );
};

export default PostFormSkeleton;
