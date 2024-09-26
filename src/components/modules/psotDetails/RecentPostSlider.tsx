"use client";

import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; // Import the autoplay module
import { FreeMode, Autoplay } from "swiper/modules";
import { TPost } from "@/src/types";
import RecentPostCard from "../../ui/cards/recentPostCard";
import { Divider } from "@nextui-org/divider";

type TRecentPostSliderClientProps = {
  posts: TPost[];
};

const RecentPostSliderClient: FC<TRecentPostSliderClientProps> = ({
  posts,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full py-8">
      <h2 className="text-default-700 text-sm">Recent posted items</h2>
      <Divider className="mb-4 mt-1" orientation="horizontal" />

      {/* Swiper Component */}
      <Swiper
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="mySwiper"
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {posts.map((post) => (
          <SwiperSlide key={post._id}>
            <RecentPostCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {posts.map((_, index) => (
          <div
            key={index}
            className={`w-8 md:w-10 h-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-secondary" : "bg-gray-300"
            }`}
            role="button"
            tabIndex={0}
            onClick={() => swiperRef.current?.slideTo(index)} // Use swiperRef to access Swiper instance
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                swiperRef.current?.slideTo(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPostSliderClient;
