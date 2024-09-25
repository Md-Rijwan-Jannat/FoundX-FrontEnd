import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TInput = {
  className?: string;
  label?: string;
  placeholder?: string;
  startContent?: JSX.Element;
  size?: "lg" | "sm" | "md";
  type?: string;
  variant?: "faded" | "flat" | "bordered" | "underlined";
  radius?: "sm" | "md" | "lg";
  name: string;
  defaultValue?: string;
  isRequired?: boolean;
  disabled?: boolean;
};

export * from "./postTypes";
export * from "./userTypes";
