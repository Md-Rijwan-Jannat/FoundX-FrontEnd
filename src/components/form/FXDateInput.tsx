"use client";

import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CalendarDate } from "@internationalized/date";
import { TInput } from "@/src/types";
import { DatePicker } from "@nextui-org/date-picker";

interface TFXDateInputProps extends Omit<TInput, "defaultValue"> {
  defaultValue?: CalendarDate;
}

const FXDateInput: FC<TFXDateInputProps> = ({
  className = "w-full",
  name,
  defaultValue,
  isRequired: required = false,
  variant = "faded",
  label,
  size = "sm",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={defaultValue ?? undefined}
      name={name}
      render={({ field }) => {
        return (
          <DatePicker
            {...field}
            className={className}
            errorMessage={
              errors?.[name]?.message
                ? (errors?.[name]?.message as string)
                : undefined
            }
            isInvalid={!!errors?.[name]}
            isRequired={required}
            label={label}
            placeholderValue={defaultValue}
            size={size}
            variant={variant}
          />
        );
      }}
    />
  );
};

export default FXDateInput;
