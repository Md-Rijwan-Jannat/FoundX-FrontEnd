import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IFXFormProps extends IFormConfig {
  children: React.ReactNode;
  onSubmit: () => void;
}

const FXForm: FC<IFXFormProps> = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) => {
  const formConfig: IFormConfig = {};

  // Handle default values
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  // Handle resolver
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm();
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)} action="">
        {children}
      </form>
    </FormProvider>
  );
};

export default FXForm;
