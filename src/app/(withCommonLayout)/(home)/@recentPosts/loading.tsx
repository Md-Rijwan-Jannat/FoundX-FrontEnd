import { FC } from "react";

import RecentPostSkeleton from "@/src/components/ui/skeleton/recentPostSkeleton";

type TLoadingProps = object;

const Loading: FC<TLoadingProps> = () => {
  return (
    <div>
      <RecentPostSkeleton />
    </div>
  );
};

export default Loading;
