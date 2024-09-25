"use client";
import { FC } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";
import { Avatar } from "@nextui-org/avatar";

import { TPost } from "@/src/types";
import Link from "next/link";

type TRecentPostCardProps = {
  post: TPost;
};

const RecentPostCard: FC<TRecentPostCardProps> = ({ post }) => {
  const { title, dateFound, description, _id, images, category } = post || {};

  return (
    <>
      {" "}
      <Card isFooterBlurred className="w-full h-[300px]">
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute top-3 before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-secondary/80">{title}</p>
          <Chip
            className="text-tiny text-secondary/70 bg-black/20"
            color="default"
            radius="lg"
            variant="flat"
          >
            {format(new Date(dateFound), "dd MMMM, yyy")}
          </Chip>
        </CardFooter>

        <Link className="w-full h-full" href={`/found-items/${_id}`}>
          <Image
            isZoomed
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={images[0]}
          />
        </Link>
        <CardFooter className="absolute bg-black/30 bottom-0 z-10">
          <div className="flex flex-grow gap-2 items-center">
            <Avatar
              showFallback
              className="rounded-full w-10 h-10 bg-black bg-cover object-cover"
              fallback={title.slice(0, 1)}
              name={title.slice(0, 1)}
              src={images?.[1] || ""}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{category?.name}</p>
              <p className="text-tiny text-white/60">
                {description.length > 25 ? (
                  <span className="cursor-pointer">
                    {description.substring(0, 25)}...
                  </span>
                ) : (
                  description
                )}
              </p>
            </div>
          </div>
          <Button
            className="text-default-50"
            color="secondary"
            radius="full"
            size="sm"
            variant="flat"
          >
            <Link href={`/found-items/${_id}`}> Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default RecentPostCard;
