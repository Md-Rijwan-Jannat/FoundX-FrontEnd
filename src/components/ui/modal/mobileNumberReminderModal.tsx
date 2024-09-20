"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { FC, useEffect } from "react";
import { useUser } from "@/src/context/userProvider"; // Adjust the import path if necessary
import envConfig from "@/src/config/envConfig";
import { Button } from "@nextui-org/button";
import Link from "next/link";

type TMobileNumberReminderProps = object;

const MobileNumberReminder: FC<TMobileNumberReminderProps> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = useUser();

  useEffect(() => {
    const checkUserMobileNumber = () => {
      if (user?.mobileNumber === envConfig.social_user_mobile_number) {
        onOpen();
      }
    };

    checkUserMobileNumber();

    const interval = setInterval(() => {
      checkUserMobileNumber();
    }, 60000);

    return () => clearInterval(interval);
  }, [user, onOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        placement="bottom"
        size="sm"
        style={{ position: "fixed", bottom: "0px", right: "20px" }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-sm">
                Mobile Number Reminder
              </ModalHeader>
              <ModalBody>
                <p className="text-xs">
                  Your mobile number is not verified. Please update your mobile
                  number for better experience.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  size="sm"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button color="secondary" size="sm" onPress={onClose}>
                  <Link href={"/profile"}> Update Now</Link>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileNumberReminder;
