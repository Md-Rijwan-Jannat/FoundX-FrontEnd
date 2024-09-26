"use client";

import { FC } from "react";
import Player from "lottie-react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import notFoundAnimation from "../../assets/NotFound.json";

type TNotFoundProps = object;

const NotFound: FC<TNotFoundProps> = () => {
  const router = useRouter();

  return (
    <div className="flex items-center flex-col gap-5 justify-center h-screen relative">
      <Player
        autoplay
        loop
        animationData={notFoundAnimation}
        className="rounded-lg"
        style={{ height: "100%", width: "100%" }}
      />
      <div className="absolute mt-[250px] md:mt-[450px] lg:mt-[550px] inset-0 flex flex-row items-center justify-center gap-3">
        {/* Go Back Button */}
        <Button
          className="w-[100px]"
          color="secondary"
          size="sm"
          variant="bordered"
          onClick={() => router.back()}
        >
          Go Back
        </Button>

        {/* Go to Home Button */}
        <Button
          className="w-[100px]"
          color="secondary"
          size="sm"
          variant="faded"
          onClick={() => router.push("/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
