"use client";

import { Input } from "@nextui-org/input";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";

type TFXInputProps = {
  className?: string;
  placeholder: string;
  startContent?: JSX.Element;
  size?: "lg" | "sm" | "md";
  type: string;
  variant?: "faded" | "flat" | "bordered" | "underlined";
  radius?: "sm" | "md" | "lg";
  name: string;
  defaultValue?: string;
  isRequired?: boolean;
};

const FXInput: FC<TFXInputProps> = ({
  className = "w-full",
  placeholder = "Email",
  startContent,
  size = "md",
  type = "text",
  variant = "faded",
  radius = "md",
  name,
  defaultValue = "",
  isRequired: required = false,
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
        isRequired={required}
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
