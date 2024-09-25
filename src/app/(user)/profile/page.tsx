import Profile from "@/src/components/modules/userProfile/Profile";
import { GetAllMyPosts } from "@/src/services/Post";
import { FC, Suspense } from "react";

type TUserDashboardProps = object;

const UserDashboard: FC<TUserDashboardProps> = async () => {
  const { data: myPosts } = await GetAllMyPosts();

  return (
    <Suspense fallback={<p>loading ...</p>}>
      <Profile myPosts={myPosts} />
    </Suspense>
  );
};

export default UserDashboard;
