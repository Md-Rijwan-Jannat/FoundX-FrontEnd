import { FC } from "react";

type TNavBlurEffectProps = {
  maxWidth?: string; // Dynamic max-width
  width?: string; // Dynamic width
  height?: string; // Optional height for flexibility
};

const NavBlurEffect: FC<TNavBlurEffectProps> = ({
  maxWidth = "max-w-7xl",
  width = "w-[300px] md:w-7/12",
  height = "h-[70px] md:h-[150px]",
}) => {
  return (
    <div className={`${maxWidth} pt-5`}>
      <div
        className={`${width} ${height} bg-gradient-to-r from-secondary-500 to-secondary-300 opacity-40 absolute top-0`}
        style={{ filter: "blur(80px)" }}
      />
    </div>
  );
};

export default NavBlurEffect;
