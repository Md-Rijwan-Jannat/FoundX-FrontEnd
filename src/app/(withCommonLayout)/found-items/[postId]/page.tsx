import PostDetails from "@/src/components/modules/psot-details/PostDetails";
import RecentPostSlider from "@/src/components/modules/psot-details/RecentPostSlider";
import Container from "@/src/components/ui/container";
import PostDetailsSkeleton from "@/src/components/ui/skeleton/postDetailsSkeleton";
import { GetAllRecentPosts, GetSinglePost } from "@/src/services/Post";
import { TPost } from "@/src/types";
import { FC, Suspense } from "react";
import { Metadata } from "next";

type TFoundItemDetailsPageProps = { params: { postId: string } };

export const generateMetadata = async ({
  params,
}: TFoundItemDetailsPageProps): Promise<Metadata> => {
  const { data: post } = await GetSinglePost(params.postId);

  return {
    title: post.title || "Found Item Details",
    description: post.description || "View details about this found item.",
    keywords: [
      "found item",
      "lost and found",
      "item details",
      post.category?.name || "category",
    ],
  };
};

const FoundItemDetailsPage: FC<TFoundItemDetailsPageProps> = async ({
  params,
}) => {
  const { data } = await GetAllRecentPosts();
  const { data: post } = await GetSinglePost(params.postId);

  const posts = data as TPost[];

  return (
    <Container>
      <Suspense fallback={<PostDetailsSkeleton />}>
        <PostDetails post={post} />
        <RecentPostSlider posts={posts} />
      </Suspense>
    </Container>
  );
};

export default FoundItemDetailsPage;
