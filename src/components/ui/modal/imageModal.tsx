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
      className="m-3 relative"
      closeButton={false}
      isOpen={isOpen}
      placement="center"
      size="3xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            {/* Header with Chip */}
            <ModalHeader className="-mt-2">
              <Chip color="secondary" variant="dot">
                {alt}
              </Chip>
            </ModalHeader>

            {/* Image */}
            <ModalBody className="flex justify-center items-center max-w-full h-full mb-4">
              <Image
                isBlurred
                isZoomed
                alt={alt}
                className="rounded-none md:max-w-3xl h-full object-cover w-full md:w-[45rem]"
                src={imageUrl}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
