"use client";

import { DateInput } from "@nextui-org/date-input";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { CalendarDate } from "@internationalized/date";

type TFXDateInputProps = {
  className?: string;
  name: string;
  defaultValue?: CalendarDate;
  isRequired?: boolean;
};

const FXDateInput: FC<TFXDateInputProps> = ({
  className = "w-full",
  name,
  defaultValue,
  isRequired: required = false,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <DateInput
        {...register(name)}
        aria-label={name}
        className={className}
        errorMessage={
          errors?.[name]?.message ? (errors[name].message as string) : undefined
        }
        isInvalid={!!errors?.[name]}
        isRequired={required}
        placeholderValue={defaultValue}
        onChange={(value) => setValue(name, value)} // Correctly handle onChange
      />
    </div>
  );
};

export default FXDateInput;
