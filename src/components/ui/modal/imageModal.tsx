import { FC } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";

type TImageModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  imageUrl: string;
  alt: string;
};

const ImageModal: FC<TImageModalProps> = ({
  isOpen,
  onOpenChange,
  imageUrl,
  alt,
}) => {
  return (
    <Modal
      size="5xl"
      placement="center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="m-3 relative"
      closeButton={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {/* Header with Chip */}
            <ModalHeader className="-mt-2">
              <Chip color="secondary" variant="dot">
                {alt}
              </Chip>
            </ModalHeader>

            {/* Image */}
            <ModalBody className="flex justify-center items-center mb-5 max-w-full h-full mx-3 md:mx-5">
              <Image
                isZoomed
                src={imageUrl}
                alt={alt}
                className="rounded-lg md:max-w-5xl h-full object-cover w-full md:w-[62rem]"
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
