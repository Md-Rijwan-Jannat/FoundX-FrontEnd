import { FC } from "react";
import NextLink from "next/link";

type TLogoProps = object;

const Logo: FC<TLogoProps> = () => {
  return (
    <NextLink className="flex justify-start items-center gap-1" href="/">
      <p
        className={`font-semibold text-inherit border rounded px-2 p-0.5 border-default-100`}
      >
        <span className="font-bold text-2xl text-secondary">F</span>{" "}
        <span className="-ml-1">ound</span>{" "}
        <span className="font-bold text-lg text-secondary ml-0.5">X</span>
      </p>
    </NextLink>
  );
};

export default Logo;
