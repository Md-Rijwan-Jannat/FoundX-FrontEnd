"use client";

import { TInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface TFXInputProps extends TInput {}

const FXInput: FC<TFXInputProps> = ({
  className = "w-full",
  label,
  startContent,
  size = "sm",
  type = "text",
  variant = "faded",
  radius = "md",
  name,
  defaultValue = "",
  isRequired,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <Input
        style={{ width: "100%" }}
        {...register(name)}
        aria-label={name}
        className={className}
        defaultValue={defaultValue}
        endContent={
          type === "password" && (
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <FaRegEyeSlash className="text-xl text-default-500 pointer-events-none cursor-pointer" />
              ) : (
                <FaRegEye className="text-xl text-default-500 pointer-events-none cursor-pointer" />
              )}
            </button>
          )
        }
        errorMessage={errors?.[name] && (errors?.[name]?.message as string)}
        isInvalid={!!errors?.[name]}
        isRequired={isRequired}
        label={label}
        placeholder={placeholder}
        radius={radius}
        size={size}
        startContent={startContent}
        type={isVisible && type === "password" ? "text" : type}
        variant={variant}
      />
    </div>
  );
};

export default FXInput;
