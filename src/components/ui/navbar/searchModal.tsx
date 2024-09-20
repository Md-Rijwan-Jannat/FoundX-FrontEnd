"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { FC, ReactNode, useEffect } from "react";

import { searchInput } from "./searchInput";

type TSearchModalProps = {
  text?: string; // Button text
  isIconOnly?: boolean; // Whether the button is icon only
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined; // Button variant
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

const SearchModal: FC<TSearchModalProps> = ({
  text,
  isIconOnly = true,
  variant = "flat",
  color = "secondary",
  endContent,
  modalSize = "md",
  modalPlacement = "top",
  modalContent,
  noDataMessage = "No Data",
  classNames = {}, // New classNames prop
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Detect Control + K
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        onOpen();
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onOpen]);

  return (
    <>
      <Button
        color={color}
        endContent={endContent}
        isIconOnly={isIconOnly}
        radius="full"
        variant={variant}
        onClick={onOpen}
      >
        {text}
      </Button>

      <Modal
        backdrop={"blur"}
        className={`m-2 mt-16 ${classNames.wrapper || ""}`}
        isOpen={isOpen}
        placement={modalPlacement}
        size={modalSize}
        onOpenChange={onOpenChange}
      >
        <ModalContent className={classNames.base}>
          <ModalHeader className={`flex flex-col ${classNames.header || ""}`}>
            <div className="mt-5">{searchInput}</div>
          </ModalHeader>
          <ModalBody className={classNames.body}>
            {modalContent ? (
              <div>{modalContent}</div>
            ) : (
              <p className="flex items-center justify-center text-default-700 my-5">
                {noDataMessage}
              </p>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
