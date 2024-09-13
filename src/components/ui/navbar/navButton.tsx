"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

type TNavButtonProps = {
  label?: string;
  href: string;
  icon?: React.ReactNode;
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost";
  color?: string;
  bgColor?: string;
  size?: "sm" | "md" | "lg";
};

const NavButton: FC<TNavButtonProps> = ({
  label = "Register",
  href,
  icon = <FaSignInAlt size={22} className="text-secondary" />, // Default icon
  variant = "flat",
  color = "text-default-600",
  bgColor = "bg-default-100",
  size,
}) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Button
      className={`text-sm font-normal ${color} ${bgColor}`}
      endContent={icon}
      onClick={() => router.push(href)}
      variant={variant}
      size={size}
    >
      {label}
    </Button>
  );
};

export default NavButton;
