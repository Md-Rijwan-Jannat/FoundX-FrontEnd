import PostForm from "@/src/components/form/PostForm";
import { Chip } from "@nextui-org/chip";
import { FC, Suspense } from "react";

type TCreatePostPageProps = object;

const CreatePostPage: FC<TCreatePostPageProps> = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
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
