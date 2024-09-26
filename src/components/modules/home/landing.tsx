"use client";
import { FC } from "react";
import { Button } from "@nextui-org/button";
import Player from "lottie-react";
import { IoSearch } from "react-icons/io5";
import SearchModal from "../../ui/navbar/searchModal";
import bannerAnimationJSON from "@/src/assets/banner/BannerAnimation.json";
import { useUser } from "@/src/context/userProvider";
import PostAuthenticationModal from "../../ui/modal/PostAuthenticationModal";
import Link from "next/link";
import { TUser } from "@/src/types";

type TLandingProps = object;

const Landing: FC<TLandingProps> = () => {
  const { user } = useUser();

  const { email } = (user as unknown as TUser) || {};

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
          Your one-stop solution to post items you have found or report items
          you have lost. Make it easier for everyone to reunite with their lost
          belongings!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-5 md:mt-10">
          <SearchModal
            color="secondary"
            endContent={<IoSearch className="animate-pulse" size={22} />}
            isIconOnly={false}
            modalSize="lg"
            text="Found your item"
            variant="shadow"
          />
          {email ? (
            <Button
              className="w-[110px] text-default-700"
              color="secondary"
              radius="full"
              variant="bordered"
            >
              <Link href={"/profile/create-post"}> Post Item</Link>
            </Button>
          ) : (
            <PostAuthenticationModal />
          )}
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <div className="max-w-sm p-3">
        <Player
          autoplay
          loop
          animationData={bannerAnimationJSON}
          className="rounded-lg"
          style={{ height: "370px", width: "360px" }}
        />
      </div>
    </div>
  );
};

export default Landing;
