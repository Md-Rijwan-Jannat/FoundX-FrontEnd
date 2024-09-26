import { FC, useState, useEffect } from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import FXForm from "../../form/FXForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXInput from "../../form/FXInput";
import FXTextarea from "../../form/FXTextarea";
import { Button } from "@nextui-org/button";
import { useCreateClaimRequestMutation } from "@/src/hooks/claimRequest.hook";
import { Chip } from "@nextui-org/chip";

type TClaimRequestModalProps = { id: string; questions: string[] };

const ClaimRequestModal: FC<TClaimRequestModalProps> = ({ id, questions }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Create claim request mutation
  const {
    mutate: createClaimRequestFn,
    isPending: claimRequestPending,
    isSuccess,
  } = useCreateClaimRequestMutation();

  // Close modal when the request is successful
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((filedValue) => filedValue.startsWith("answer"))
        .map((answer: string) => data[answer]),
    };

    createClaimRequestFn(claimRequestData);
  };

  return (
    <>
      {/* Button to open the modal */}
      <Button
        className="flex-1"
        color="secondary"
        variant="faded"
        onClick={() => setIsOpen(true)}
      >
        Claim Request
      </Button>

      {/* Modal */}
      <Modal
        hideCloseButton
        className="mt-5"
        isOpen={isOpen}
        placement="center"
        size="xl"
        onClose={() => setIsOpen(false)}
      >
        <ModalContent>
          {(_onClose) => (
            <>
              {/* Modal Header */}
              <ModalHeader className="flex justify-between items-center">
                <Chip
                  className="text-lg font-medium mt-4"
                  color="secondary"
                  variant="dot"
                >
                  Claim Request
                </Chip>
                <button
                  className="text-gray-500 hover:text-gray-700 border border-default-50 hover:border-default-200 rounded-full size-8 -mt-4 -mr-3"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
              </ModalHeader>

              {/* Modal Body */}
              <ModalBody>
                <FXForm onSubmit={onSubmit}>
                  {questions.map((question, index) => (
                    <div key={index}>
                      <p className="mb-1">{question}</p>
                      <FXInput
                        isRequired={true}
                        label={`Answer - ${index + 1}`}
                        name={`answer-${index + 1}`}
                        type="text"
                        variant="faded"
                      />
                    </div>
                  ))}

                  <FXTextarea
                    isRequired={true}
                    label="Description"
                    name="description"
                    rows={4}
                    type="text"
                    variant="faded"
                  />

                  <div className="w-full mx-auto flex justify-center mt-4">
                    <Button
                      className="mb-5 flex-1"
                      color="secondary"
                      isDisabled={claimRequestPending}
                      isLoading={claimRequestPending}
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </FXForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClaimRequestModal;
