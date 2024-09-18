import { FC } from "react";

type TNavBlurEffectProps = object;

const NavBlurEffect: FC<TNavBlurEffectProps> = () => {
  return (
    <div className="max-w-7xl pt-5">
      <div
        className="w-[300px] md:w-7/12 h-[70px] md:h-[150px] bg-gradient-to-r from-secondary-500 to-secondary-300 opacity-40 absolute top-0"
        style={{ filter: "blur(80px)" }}
      />
    </div>
  );
};

export default NavBlurEffect;
