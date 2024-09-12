"use client";
import { FC, useState } from "react";
import { TPost } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";
import ImageModal from "../modal/imageModal";
import { Avatar } from "@nextui-org/avatar";

type TRecentPostCardProps = {
  post: TPost;
};

const RecentPostCard: FC<TRecentPostCardProps> = ({ post }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(post.images[0]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  return (
    <>
      {" "}
      <Card isFooterBlurred className="w-full h-[300px]">
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute top-3 before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-black/80">{post.title}</p>
          <Chip
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
          >
            {format(new Date(post.dateFound), "dd MMMM, yyy")}
          </Chip>
        </CardFooter>

        <Image
          isZoomed
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={post.images[0]}
          onClick={() => handleImageClick(post.images[0])}
        />
        <CardFooter className="absolute bg-black/30 bottom-0 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <Avatar
              showFallback
              name={post.title}
              className="rounded-full w-10 h-10 bg-black bg-cover object-cover"
              src={post.images?.[1] || ""}
              onClick={() => handleImageClick(post.images[1] || "")}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{post.category.name}</p>
              <p className="text-tiny text-white/60">
                {post.description.length > 25 ? (
                  <span className="cursor-pointer">
                    {post.description.substring(0, 25)}...
                  </span>
                ) : (
                  post.description
                )}
              </p>
            </div>
          </div>
          <Button radius="full" color="secondary" variant="faded" size="sm">
            Details
          </Button>
        </CardFooter>
      </Card>
      <ImageModal
        isOpen={isModalOpen}
        onOpenChange={() => setModalOpen(false)}
        imageUrl={selectedImage}
        alt={post.title}
      />
    </>
  );
};

export default RecentPostCard;
