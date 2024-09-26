import { FC, ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";

type TFXModalProps = {
  title?: string;
  buttonClassName?: string;
  buttonVariant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  buttonColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  buttonText: string;
  // Updated type to accept a function as children that passes `onOpenChange`
  children: ReactNode;
  modalSize?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
  buttonRadius?: "sm" | "md" | "lg" | "full" | "none" | undefined;
  endContent?: JSX.Element;
  buttonSize?: "sm" | "md" | "lg" | undefined;
};

const FXModal: FC<TFXModalProps> = ({
  title,
  buttonClassName,
  buttonVariant,
  buttonColor,
  buttonText,
  children,
  modalSize,
  buttonRadius,
  endContent,
  buttonSize,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className={buttonClassName}
        color={buttonColor}
        endContent={endContent}
        radius={buttonRadius}
        size={buttonSize}
        variant={buttonVariant}
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal
        className="m-3 relative"
        closeButton={false}
        isOpen={isOpen}
        placement="center"
        size={modalSize}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(_onClose) => (
            <>
              <ModalHeader className="-mt-2">
                <Chip color="secondary" variant="dot">
                  {title}
                </Chip>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FXModal;
