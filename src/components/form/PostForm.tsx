"use client";

import { FC } from "react";
import FXInput from "./FXInput";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
  useFieldArray,
} from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import FXTextarea from "./FXTextarea";
import FXDateInput from "./FXDateInput";
import { formatCalendarDate } from "@/src/utils/dateFormat";

type TPostFormProps = object;

const PostForm: FC<TPostFormProps> = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formattedDateFound = formatCalendarDate(data.dateFound);
    const postData = {
      ...data,
      questions: data?.questions.map((que: { value: string }) => que.value),
      dateFound: formattedDateFound,
    };

    console.log(postData);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className="space-y-3 w-full p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FXInput name="title" placeholder="Title" type="text" />
          <FXInput name="location" placeholder="Location" type="text" />
          <FXDateInput name="dateFound" />
          <FXTextarea name="description" placeholder="Description" rows={3} />
          <Divider className="my-2" />
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-default-600 text-sm">Add Some Questions</h2>
            <Button
              color="success"
              size="sm"
              variant="flat"
              onClick={handleFieldAppend}
            >
              Add Field
            </Button>
          </div>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex items-center justify-between mb-3"
            >
              <div className="flex-1 mr-2">
                <FXInput
                  className="w-full"
                  name={`questions.${index}.value`}
                  placeholder="Add question"
                  type="text"
                />
              </div>
              <Button
                color="danger"
                size="sm"
                variant="flat"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </div>
          ))}

          <Divider className="my-2" />
          <Button
            className="mt-2"
            color="secondary"
            type="submit"
            variant="flat"
          >
            Create
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default PostForm;
