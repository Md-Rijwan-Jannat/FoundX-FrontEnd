import { FC } from "react";
import PostCard from "../../ui/cards/postCard";
import { TPost } from "@/src/types";
import { Divider } from "@nextui-org/divider";
import NoDataAnimation from "../../ui/noData";
import Filtering from "./Filtering";

type TFoundItemProps = {
  foundItems: TPost[];
};

const FoundItem: FC<TFoundItemProps> = ({ foundItems }) => {
  return (
    <div>
      <Filtering />
      <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

      {/* No data animation */}
      {foundItems.length === 0 && <NoDataAnimation />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {foundItems?.map((post: TPost) => (
          <PostCard key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FoundItem;
