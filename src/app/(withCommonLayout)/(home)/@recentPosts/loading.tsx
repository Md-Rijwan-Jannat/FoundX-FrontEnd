import RecentPostSkeleton from "@/src/components/ui/skeleton/recentPostSkeleton";
import { FC } from "react";

type TLoadingProps = object;

const Loading: FC<TLoadingProps> = () => {
  return (
    <div>
      <RecentPostSkeleton />
    </div>
  );
};

export default Loading;
