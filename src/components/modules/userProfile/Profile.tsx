import { TPost } from "@/src/types";
import { Divider } from "@nextui-org/divider";
import { FC } from "react";
import PostCard from "../../ui/cards/postCard";

type TProfileProps = {
  myPosts: TPost[];
};

const Profile: FC<TProfileProps> = ({ myPosts }) => {
  return (
    <div>
      <h2 className="text-default-700 text-sm">My All Posts</h2>
      <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

      {/* Grid layout for posts */}
      <div className="md:w-3/4 mx-auto gap-3">
        {myPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
