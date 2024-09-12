import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { FC } from "react";

import { searchInput } from "./searchInput";
import { IoSearch } from "react-icons/io5";

type TSearchModalProps = object;

const SearchModal: FC<TSearchModalProps> = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        isIconOnly
        onClick={onOpen}
        className="text-sm font-normal text-secondary bg-transparent"
        endContent={<IoSearch className="text-secondary" size={22} />}
        variant="flat"
      />

      <Modal
        size="lg"
        isOpen={isOpen}
        placement={"top"}
        onOpenChange={onOpenChange}
        className="m-2 mt-16"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="mt-5">{searchInput}</div>
              </ModalHeader>
              <ModalBody>
                <p className="flex items-center justify-center text-default-700 my-5">
                  No Data
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
