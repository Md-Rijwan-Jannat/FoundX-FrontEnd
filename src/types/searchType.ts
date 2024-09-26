import { ReactNode } from "react";

export type TSearchModalProps = {
  text?: string;
  isIconOnly?: boolean;
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  endContent?: ReactNode;
  modalSize?:
    | "lg"
    | "sm"
    | "md"
    | "full"
    | "xl"
    | "2xl"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | undefined;
  modalPlacement?: "top" | "center" | "bottom";
  modalContent?: ReactNode;
  noDataMessage?: string;
  classNames?: Partial<
    Record<
      | "wrapper"
      | "base"
      | "backdrop"
      | "header"
      | "body"
      | "footer"
      | "closeButton",
      string
    >
  >;
};

export type TSearchItem = {
  id: string;
  description: string;
  title: string;
  thumbnail: string;
};
