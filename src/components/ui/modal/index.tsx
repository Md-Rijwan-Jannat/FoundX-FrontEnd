import { FC, ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
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
};

const FXModal: FC<TFXModalProps> = ({
  title,
  buttonClassName,
  buttonVariant,
  buttonColor,
  buttonText,
  children,
  modalSize,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className={buttonClassName}
        variant={buttonVariant}
        color={buttonColor}
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
          {(onClose) => (
            <>
              {/* Header with Chip */}
              <ModalHeader className="-mt-2">
                <Chip color="secondary" variant="dot">
                  {title}
                </Chip>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter>
                <Button
                  color="danger"
                  size="sm"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button color="secondary" size="sm" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FXModal;
