"use client";
import { FC } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { CgSearchFound } from "react-icons/cg";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import SectionTitle from "../sectionTitle";

type TRecentPostSkeletonProps = object;

const RecentPostSkeleton: FC<TRecentPostSkeletonProps> = () => {
  return (
    <div className="my-8">
      {/* Section Title */}
      <SectionTitle
        alignment="center"
        subtitle="Explore the most recent items that have been found and reported,
          helping to reunite lost belongings with their owners."
        title="Recently Found Items"
      />

      {/* Chip with Icon */}
      <div className="text-start my-6">
        <Chip startContent={<CgSearchFound size={20} />} variant="bordered">
          Recent Posts
        </Chip>
      </div>

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-full h-[300px] relative rounded-xl overflow-hidden"
            >
              <Skeleton className="h-full w-full rounded-xl" />

              {/* Top Content with Skeleton */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center p-3 bg-default-300/50 rounded-full">
                <Skeleton className="h-5 w-[120px] rounded-md" />
                <Skeleton className="h-5 w-[80px] rounded-md" />
              </div>

              {/* Bottom Content with Skeleton */}
              <div className="absolute w-full bottom-0 flex justify-between items-center bg-default-300/50 px-3 py-3 rounded-b-xl">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <Skeleton className="h-4 w-[60px] rounded-md" />
                    <Skeleton className="h-4 w-[80px] mt-1 rounded-md" />
                  </div>
                </div>
                <Skeleton className="h-6 w-[60px] rounded-full" />
              </div>
            </div>
          ))}
      </div>

      {/* See More Button */}
      <div className="flex items-center justify-center w-full mt-24">
        <Button color="secondary" variant="flat">
          <Link href={"found-item"}>See More</Link>
        </Button>
      </div>
    </div>
  );
};

export default RecentPostSkeleton;
