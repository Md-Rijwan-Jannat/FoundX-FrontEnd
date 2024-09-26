import { FC, useState, useEffect } from "react";
import FXForm from "../../form/FXForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXTextarea from "../../form/FXTextarea";
import { Button } from "@nextui-org/button";
import { VscFeedback } from "react-icons/vsc";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Chip } from "@nextui-org/chip";
import FXSelect from "../../form/FXSelect";
import { useUpdateClaimantStatusMutation } from "@/src/hooks/claimRequest.hook";

type TStatus = {
  key: string;
  label: string;
}[];

type TUpdateClaimantStatusModalProps = {
  claimRequestId: string;
};

const UpdateClaimantStatusModal: FC<TUpdateClaimantStatusModalProps> = ({
  claimRequestId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    mutate: updateClaimantStatus,
    isPending,
    isSuccess,
  } = useUpdateClaimantStatusMutation();

  // Close modal when the update is successful
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const claimantStatusData = {
        id: claimRequestId,
        statusData: { ...data },
      };

      updateClaimantStatus(claimantStatusData);
    } catch (error) {
      console.error(error);
    }
  };

  const statusOptions: TStatus = [
    { label: "Approved", key: "APPROVED" },
    { label: "Rejected", key: "REJECTED" },
  ];

  return (
    <>
      {/* Button to open the modal */}
      <Button
        className="bg-black/40 text-secondary-500 font-semibold border-none text-tiny"
        endContent={<VscFeedback size={16} />}
        radius="full"
        size="sm"
        variant="faded"
        onClick={() => setIsOpen(true)}
      >
        Notify
      </Button>

      {/* Modal */}
      <Modal placement="center" hideCloseButton isOpen={isOpen}>
        <ModalContent>
          {(_onClose) => (
            <>
              {/* Modal Header with close (X) button */}
              <ModalHeader className="flex justify-between items-center">
                <Chip className="mt-3" color="secondary" variant="dot">
                  Update Claimant Status
                </Chip>
                <button
                  className="text-gray-500 hover:text-gray-700 border border-default-50 hover:border-default-200 rounded-full size-8 -mt-5 -mr-3"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
              </ModalHeader>

              {/* Modal Body */}
              <ModalBody className="mb-5">
                <FXForm onSubmit={onSubmit}>
                  <FXSelect
                    label="Status"
                    name="status"
                    options={statusOptions}
                  />

                  {/* Feedback Textarea */}
                  <FXTextarea
                    isRequired={true}
                    label="Feedback"
                    name="feedback"
                    placeholder="Provide your feedback here"
                    rows={4}
                  />

                  {/* Submit Button */}
                  <Button
                    className="mt-4 w-full"
                    color="secondary"
                    isDisabled={isPending}
                    isLoading={isPending}
                    type="submit"
                  >
                    Send
                  </Button>
                </FXForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateClaimantStatusModal;
