import { FC } from "react";
import { AllRecentPosts } from "@/src/services/recentPosts";
import { Chip } from "@nextui-org/chip";
import { CgSearchFound } from "react-icons/cg";
import { delay } from "@/src/utils/delay";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import RecentPostCard from "@/src/components/ui/cards/recentPostCard";

type TRecentPostsProps = object;

const RecentPosts: FC<TRecentPostsProps> = async () => {
  const { data: posts } = await AllRecentPosts();
  await delay(1000);

  if (!posts.length) {
    return (
      <div className="my-8">
        <h2 className="text-2xl font-bold text-center">Recently Found Item</h2>
        <p className="text-center text-default-600">No recent items found.</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="text-center my-6 w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-xl font-bold">Recently Found Items</h2>
        <p className="text-sm font-normal">
          Explore the most recent items that have been found and reported,
          helping to reunite lost belongings with their owners.
        </p>
      </div>
      <div className="text-start my-6">
        <Chip startContent={<CgSearchFound size={20} />} variant="bordered">
          Recent Posts
        </Chip>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <RecentPostCard key={post._id} post={post} />
        ))}
      </div>

      <div className="my-8 flex items-center justify-center w-full">
        <Button color="secondary" variant="flat">
          <Link href={"found-item"}>See More</Link>
        </Button>
      </div>
    </div>
  );
};

export default RecentPosts;
