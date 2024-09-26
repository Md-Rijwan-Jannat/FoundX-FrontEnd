"use client";

import Player from "lottie-react";
import { FC } from "react";
import noDataAnimation from "../../assets/NoData/no-data-animation.json";

type TNoDataAnimationProps = object;

const NoDataAnimation: FC<TNoDataAnimationProps> = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center animate-pulse">
      <Player
        autoplay
        loop
        animationData={noDataAnimation}
        className="rounded-lg"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default NoDataAnimation;
