"use client";

import { Textarea } from "@nextui-org/input";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

type TFXTextareaProps = {
  className?: string;
  placeholder: string;
  size?: "lg" | "sm" | "md";
  name: string;
  defaultValue?: string;
  isRequired?: boolean;
  rows?: number;
};

const FXTextarea: FC<TFXTextareaProps> = ({
  className,
  placeholder,
  size = "md",
  name,
  defaultValue = "",
  isRequired: required = false,
  rows = 3,
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
        placeholder={placeholder}
        rows={rows}
        size={size}
        variant="faded"
      />
    </div>
  );
};

export default FXTextarea;
