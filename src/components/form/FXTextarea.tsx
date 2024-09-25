"use client";

import { TInput } from "@/src/types";
import { Textarea } from "@nextui-org/input";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface TFXTextareaProps extends Omit<TInput, "rows"> {
  rows?: number;
}

const FXTextarea: FC<TFXTextareaProps> = ({
  className,
  label,
  size = "sm",
  name,
  defaultValue = "",
  isRequired: required = false,
  rows,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Textarea
        {...register(name)}
        aria-label={name}
        className={className}
        defaultValue={defaultValue}
        errorMessage={errors?.[name] && (errors?.[name]?.message as string)}
        isInvalid={!!errors?.[name]}
        isRequired={required}
        label={label}
        minRows={rows}
        size={size}
        variant="faded"
      />
    </div>
  );
};

export default FXTextarea;
