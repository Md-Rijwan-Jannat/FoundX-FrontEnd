import { FC } from "react";
import FXModal from ".";
import FXForm from "../../form/FXForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXInput from "../../form/FXInput";
import FXTextarea from "../../form/FXTextarea";
import { Button } from "@nextui-org/button";
import { useCreateClaimRequestMutation } from "@/src/hooks/claimRequest.hook";

type TClaimRequestModalProps = { id: string; questions: string[] };

const ClaimRequestModal: FC<TClaimRequestModalProps> = ({ id, questions }) => {
  // Create claim request mutation
  const { mutate: createClaimRequestFn, isPending: claimRequestPending } =
    useCreateClaimRequestMutation();

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
    <FXModal
      buttonClassName="flex-1"
      buttonColor="secondary"
      buttonText="Claim request"
      buttonVariant="faded"
      title="Claim request"
    >
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <p className="mb-1">{question}</p>
            <FXInput
              isRequired={true}
              label={`Answer - ${index + 1}`}
              name={`answer - ${index + 1}`}
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

        <div className="w-full mx-auto flex justify-center ">
          <Button
            className="w-[150px] mb-5"
            color="secondary"
            isLoading={claimRequestPending}
            type="submit"
            variant="flat"
          >
            Send
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
