import { Chip } from "@nextui-org/chip";
import { CgSearchFound } from "react-icons/cg";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import { AllRecentPosts } from "@/src/services/recentPostService";
import RecentPostCard from "@/src/components/ui/cards/recentPostCard";
import SectionTitle from "@/src/components/ui/sectionTitle";

const RecentPosts = async () => {
  const { data: posts } = await AllRecentPosts();

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
      {/* Section Title */}
      <SectionTitle
        alignment="center"
        subtitle="Explore the most recent items that have been found and reported,
          helping to reunite lost belongings with their owners."
        title="Recently Found Items"
      />
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
