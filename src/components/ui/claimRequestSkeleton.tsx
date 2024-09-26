import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton"; // Import Skeleton from NextUI
import { FC } from "react";

const ClaimRequestSkeleton: FC = () => {
  return (
    <>
      <h2 className="text-default-700 text-sm">Recent Claim Requests</h2>
      <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

      {/* Grid layout for skeleton claim requests */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-md bg-default-50 p-4 animate-pulse"
          >
            <div className="border-b border-default-200 pb-2">
              {/* Header Skeleton */}
              <div className="flex items-center gap-3">
                {/* Avatar Skeleton */}
                <Skeleton className="rounded-full w-12 h-12" />
                <div className="flex-1">
                  {/* Name Skeleton */}
                  <Skeleton className="mb-1 w-32 h-4" />
                  {/* Email or ID Skeleton */}
                  <Skeleton className="w-36 h-3" />
                </div>
              </div>

              {/* Divider Skeleton */}
              <Divider className="my-2" />

              {/* Request details Skeleton */}
              <div className="mt-2">
                <Skeleton className="mb-2 w-full h-4" />
                <Skeleton className="mb-2 w-4/5 h-4" />
                <Skeleton className="w-3/4 h-4" />
              </div>

              {/* Action button Skeleton */}
              <div className="mt-4">
                <Skeleton className="w-24 h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClaimRequestSkeleton;
