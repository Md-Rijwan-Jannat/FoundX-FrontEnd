import PostCard from "@/src/components/ui/cards/postCard";
import Container from "@/src/components/ui/container";
import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import { TPost } from "@/src/types";
import { FC } from "react";
import { Metadata } from "next";

type TFoundItemPageProps = object;

// Define metadata for the Found Item page
export const metadata: Metadata = {
  title: "Found Items | FoundX",
  description:
    "Browse through all found items on the FoundX platform. Discover lost belongings and help reunite them with their owners.",
  keywords: ["found items", "lost and found", "FoundX", "reunite lost items"],
};

const FoundItemPage: FC<TFoundItemPageProps> = async () => {
  const { data } = await AxiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: TPost) => (
          <PostCard key={post?._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default FoundItemPage;
