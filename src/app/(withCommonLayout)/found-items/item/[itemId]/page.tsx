import { FC } from "react";
import { GetSinglePost } from "@/src/services/Post";
import { Metadata } from "next";
import Container from "@/src/components/ui/container";
import PostCard from "@/src/components/ui/cards/postCard";

type TPostItemPageProps = { params: { itemId: string } };

export const generateMetadata = async ({
  params,
}: TPostItemPageProps): Promise<Metadata> => {
  const { data: post } = await GetSinglePost(params.itemId);

  return {
    title: post.title || "Post Not Found",
    description: post.description || "View details about this found item.",
    keywords: [
      "found item",
      "lost and found",
      "item details",
      post.category?.name || "category",
    ],
  };
};

const PostItemPage: FC<TPostItemPageProps> = async ({ params }) => {
  const { data: post } = await GetSinglePost(params.itemId);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[600px]">
        <PostCard post={post} />
      </div>
    </Container>
  );
};

export default PostItemPage;
