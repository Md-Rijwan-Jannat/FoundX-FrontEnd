"use client";
import { FC } from "react";
import bannerAnimationJSON from "@/src/assets/banner/BannerAnimation.json";
import { Button } from "@nextui-org/button";
import Player from "lottie-react";
import { IoSearch } from "react-icons/io5";
import SearchModal from "../../ui/navbar/searchModal";

type TLandingProps = object;

const Landing: FC<TLandingProps> = () => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-center justify-between pb-10 rounded-lg -mt-10`}
    >
      {/* Left Side: Text */}
      <div className="flex flex-col space-y-8 text-left max-w-lg items-center lg:items-start">
        <h1
          className={`text-4xl font-bold text-center lg:text-start text-default-800`}
        >
          Welcome to Found X!
        </h1>
        <p className={`text-lg text-center lg:text-start text-default-600`}>
          Your one-stop solution to post items you've found or report items
          you've lost. Make it easier for everyone to reunite with their lost
          belongings!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-5 md:mt-10">
          <SearchModal
            isIconOnly={false}
            modalSize="4xl"
            color="secondary"
            variant="shadow"
            endContent={<IoSearch className="animate-pulse" size={22} />}
            text="Found your item"
          />
          <Button
            color="secondary"
            className="w-[110px] text-default-700"
            variant="bordered"
            radius="full"
          >
            Post Item
          </Button>
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <div className="max-w-sm p-3">
        <Player
          autoplay
          loop
          animationData={bannerAnimationJSON}
          style={{ height: "370px", width: "360px" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Landing;
