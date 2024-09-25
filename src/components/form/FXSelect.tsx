import { FC } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { TInput } from "@/src/types";
import { useFormContext } from "react-hook-form";

interface TFXSelectProps extends Omit<TInput, "options" | "selectionMode"> {
  options: {
    key: string;
    label: string;
  }[];
  selectionMode?: string;
}

const FXSelect: FC<TFXSelectProps> = ({
  options,
  className = "w-full",
  name,
  isRequired,
  variant = "faded",
  label,
  size = "sm",
  disabled,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      required
      className={className}
      errorMessage={
        errors?.[name]?.message
          ? (errors?.[name]?.message as string)
          : undefined
      }
      isDisabled={disabled}
      isInvalid={!!errors?.[name]}
      isRequired={isRequired}
      label={label}
      size={size}
      variant={variant}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
