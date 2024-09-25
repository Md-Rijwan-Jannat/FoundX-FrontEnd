"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { imageVariants } from "@/src/styles/animation";

type TPostSliderProps = { images: string[] };

const PostSlider: FC<TPostSliderProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-row gap-6 w-full z-20">
      <div className="flex flex-col gap-3 md:gap-5 h-[300px] overflow-y-auto">
        {images.map((image, index) => (
          <Image
            key={index}
            alt=""
            className="h-[50px] w-[70px] object-cover object-center rounded-md cursor-pointer"
            height={500}
            src={image}
            width={500}
            onClick={() => setActiveImage(image)}
          />
        ))}
      </div>
      <motion.div
        animate="animate"
        className="w-full h-[300px] aspect-square rounded-xl overflow-hidden"
        exit="exit"
        initial="initial"
        variants={imageVariants}
      >
        <Image
          alt={activeImage}
          className="w-full h-full object-cover object-center"
          height={500}
          src={activeImage}
          width={500}
        />
      </motion.div>
    </div>
  );
};

export default PostSlider;
