import { TPost } from "@/src/types";
import { Divider } from "@nextui-org/divider";
import { FC } from "react";
import PostCard from "../../../../components/ui/cards/postCard";
import NoDataAnimation from "@/src/components/ui/noData";

type TProfileProps = {
  myPosts: TPost[];
};

const Profile: FC<TProfileProps> = ({ myPosts }) => {
  return (
    <div>
      <h2 className="text-default-700 text-sm">My All Posts</h2>
      <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

      {/* No data animation */}
      {myPosts.length === 0 && <NoDataAnimation />}

      {/* Grid layout for posts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {myPosts?.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Profile;
