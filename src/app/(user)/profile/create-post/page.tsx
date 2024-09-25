import PostForm from "@/src/components/modules/create-post/PostForm";
import PostFormSkeleton from "@/src/components/ui/skeleton/postFormSkeleton";
import { Chip } from "@nextui-org/chip";
import { FC, Suspense } from "react";

type TCreatePostPageProps = object;

const CreatePostPage: FC<TCreatePostPageProps> = () => {
  return (
    <Suspense fallback={<PostFormSkeleton />}>
      <Chip
        className="text-default-600 mb-5"
        color="secondary"
        size="lg"
        variant="faded"
      >
        Create Post
      </Chip>
      <PostForm />
    </Suspense>
  );
};

export default CreatePostPage;
