import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton"; // Import the Skeleton component from NextUI
import { FC } from "react";

const PostSkeleton: FC = () => {
  return (
    <div>
      <h2 className="text-default-700 text-sm">My All Posts</h2>
      <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

      {/* Grid layout for posts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="mb-2 rounded-md bg-default-50 p-4 animate-pulse"
          >
            <div className="border-b border-default-200 pb-2">
              {/* Header Section */}
              <div className="flex items-center justify-between border-b border-default-200 pb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar Skeleton */}
                  <Skeleton className="rounded-full w-12 h-12" />
                  <div>
                    {/* Name Skeleton */}
                    <Skeleton className="mb-1 w-32 h-4 rounded-md" />
                    {/* Email Skeleton */}
                    <Skeleton className="w-36 h-3 rounded-md" />
                  </div>
                </div>

                {/* Dropdown Skeleton */}
                <Skeleton className="w-6 h-6 rounded-md" />
              </div>

              {/* Content Section */}
              <div className="border-b border-default-200 py-4">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    {/* Title Skeleton */}
                    <Skeleton className="mb-2 w-44 h-5 rounded-md" />
                    <p className="flex items-center gap-1 text-xs">
                      {/* Date Skeleton */}
                      <Skeleton className="w-24 h-3 rounded-md" />
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-1">
                      {/* Location Skeleton */}
                      <Skeleton className="w-28 h-3 rounded-md" />
                    </p>
                  </div>
                </div>

                {/* Description Skeleton */}
                <Skeleton className="mb-2 w-full h-4 rounded-md" />
                <Skeleton className="mb-2 w-4/5 h-4 rounded-md" />
              </div>

              {/* Image Gallery Skeleton */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Skeleton className="rounded-md w-full h-48" />
                <Skeleton className="rounded-md w-full h-48" />
              </div>

              {/* Action Section */}
              <div className="mt-4 flex gap-9 items-center justify-between">
                {/* Claim Button Skeleton */}
                <Skeleton className="w-full h-9 rounded-lg" />
                <div className="w-[1px] bg-default-200" />
                {/* Share Button Skeleton */}
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSkeleton;
