"use client";
import { FC } from "react";
import bannerAnimationJSON from "@/src/assets/banner/BannerAnimation.json";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import Player from "lottie-react";

type TLandingProps = object;

const Landing: FC<TLandingProps> = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-5 pb-10 rounded-lg ${
        theme === "dark" ? "" : ""
      }`}
    >
      {/* Left Side: Text */}
      <div className="flex flex-col space-y-8 text-left max-w-lg items-center lg:items-start">
        <h1
          className={`text-4xl font-bold text-center lg:text-start ${
            theme === "dark" ? "text-white" : "text-default-900"
          }`}
        >
          Welcome to Found X!
        </h1>
        <p className={`text-lg text-center lg:text-start "text-default-200`}>
          Your one-stop solution to post items you've found or report items
          you've lost. Make it easier for everyone to reunite with their lost
          belongings!
        </p>
        <div style={{ marginTop: "60px" }} className="flex gap-5">
          <Button color="secondary" className="w-[110px]" variant="shadow">
            Post Item
          </Button>
          <Button color="secondary" className="w-[110px]" variant="bordered">
            Found Item
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
