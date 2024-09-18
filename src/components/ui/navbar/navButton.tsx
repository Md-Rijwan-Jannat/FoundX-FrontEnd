"use client";
import { Button } from "@nextui-org/button";
import { FC, useEffect, useState } from "react";

type TNavButtonProps = {
  label?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
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
  onClick?: () => void;
};

const NavButton: FC<TNavButtonProps> = ({
  label = "Register",
  endIcon,
  startIcon,
  variant = "flat",
  color = "text-default-600",
  bgColor = "bg-default-100",
  size,
  onClick,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Button
      className={`text-sm font-normal ${color} ${bgColor}`}
      endContent={endIcon}
      size={size}
      startContent={startIcon}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;
