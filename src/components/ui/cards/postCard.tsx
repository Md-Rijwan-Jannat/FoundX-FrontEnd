"use client";
import { FC, useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

import ImageModal from "../modal/imageModal";

import { TPost } from "@/src/types";

type TFoundItemCardProps = {
  post: TPost;
};

const PostCard: FC<TFoundItemCardProps> = ({ post }) => {
  return (
    <Card
      key={post._id}
      className="bg-default-50 rounded-lg overflow-hidden duration-300 border border-default-100"
    >
      {/* Image Carousel Section */}
      <ImageCarousel alt={post.title} images={post.images} />

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

        {/* Description */}
        <p className="text-sm text-default-500 mb-1">Description:</p>
        <div className="text-default-700 mb-3">
          {post.description.length > 40 ? (
            <Tooltip content={post.description}>
              <span className="cursor-pointer">
                {post.description.substring(0, 40)}...
              </span>
            </Tooltip>
          ) : (
            post.description
          )}
        </div>

        {/* Location */}
        <p className="text-sm text-default-500 mb-1">Location:</p>
        <p className="text-default-600 mb-3">
          {post.location}, {post.city}
        </p>

        {/* Date Found */}
        <p className="text-sm text-default-500 mb-1">Date Found:</p>
        <p className="text-default-600">
          {new Date(post.dateFound).toLocaleDateString()}
        </p>
      </div>

      {/* Footer Section */}
      <div className="bg-default-100 p-4 flex justify-between items-center">
        <span
          className={`${
            post.status === "AVAILABLE" ? "text-green-500" : "text-red-500"
          } font-semibold`}
        >
          {post.status}
        </span>
        <Button className="text-sm" color="secondary" variant="light">
          View Details
        </Button>
      </div>
    </Card>
  );
};

type TImageCarouselProps = {
  images: string[];
  alt: string;
};

const ImageCarousel: FC<TImageCarouselProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="">
      <motion.div
        key={currentIndex}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full rounded-md overflow-hidden p-4"
        exit={{ opacity: 0, scale: 0.96 }}
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 1.0 }}
      >
        <Image
          isBlurred
          isZoomed
          removeWrapper
          alt={`${alt} image`}
          className="w-full h-full bg-cover bg-center"
          height={240}
          src={images[currentIndex] || "/placeholder-image.jpg"}
          onClick={() => handleImageClick(images[currentIndex])}
        />
      </motion.div>
      {/* Image Modal */}
      <ImageModal
        alt={alt}
        imageUrl={selectedImage}
        isOpen={isModalOpen}
        onOpenChange={() => setModalOpen(false)}
      />
    </div>
  );
};

export default PostCard;
