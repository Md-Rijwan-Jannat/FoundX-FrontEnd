import Profile from "@/src/app/(user)/_components/userProfile/Profile";
import PostSkeleton from "@/src/components/ui/postSkeleton";
import { GetAllMyPosts } from "@/src/services/Post";
import { FC, Suspense } from "react";

type TUserDashboardProps = object;

const UserDashboard: FC<TUserDashboardProps> = async () => {
  const { data: myPosts } = await GetAllMyPosts();

  return (
    <Suspense fallback={<PostSkeleton />}>
      <Profile myPosts={myPosts} />
    </Suspense>
  );
};

export default UserDashboard;
