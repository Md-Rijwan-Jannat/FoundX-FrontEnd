"use client";
import { FC } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

type TNavLinkProps = { item: { label: string; href: string } };

const NavLink: FC<TNavLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <NextLink
      className={`${
        pathname === item.href
          ? "text-secondary font-semibold"
          : `text-default-700`
      }  transition-colors duration-500 text-sm mx-2`}
      color="foreground"
      href={item.href}
    >
      {item.label}
    </NextLink>
  );
};

export default NavLink;
