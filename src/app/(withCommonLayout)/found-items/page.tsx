import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import { FC, Suspense } from "react";
import { Metadata } from "next";
import FoundItem from "@/src/components/modules/foundItem/FoundItem";
import PostSkeleton from "@/src/components/ui/postSkeleton";

type TFoundItemPageProps = {
  searchParams: any;
};

// Define metadata for the Found Item page
export const metadata: Metadata = {
  title: "Found Items | FoundX",
  description:
    "Browse through all found items on the FoundX platform. Discover lost belongings and help reunite them with their owners.",
  keywords: ["found items", "lost and found", "FoundX", "reunite lost items"],
};

const FoundItemPage: FC<TFoundItemPageProps> = async ({ searchParams }) => {
  const query = new URLSearchParams(searchParams);

  const { data } = await AxiosInstance.get(`/items`, {
    params: {
      searchTerm: query.get("query"),
      category: query.get("category"),
    },
  });

  const foundItems = data?.data;

  console.log(searchParams);

  return (
    <Suspense fallback={<PostSkeleton />}>
      <FoundItem foundItems={foundItems} />
    </Suspense>
  );
};

export default FoundItemPage;
