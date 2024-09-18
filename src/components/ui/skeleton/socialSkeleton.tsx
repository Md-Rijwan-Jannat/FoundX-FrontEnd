import { FC } from "react";
import { Skeleton } from "@nextui-org/skeleton";

const SocialLoginSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 items-center">
      <div className="flex flex-col md:flex-row items-center gap-3 justify-between w-full">
        {/* Google Sign In Skeleton */}
        <Skeleton className="w-full h-12 rounded-full" />
        {/* Facebook Sign In Skeleton */}
        <Skeleton className="w-full h-12 rounded-full" />
      </div>
      {/* GitHub Sign In Skeleton */}
      <Skeleton className="w-full md:w-1/2 h-12 rounded-full" />
    </div>
  );
};

export default SocialLoginSkeleton;
