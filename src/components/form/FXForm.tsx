"use client";
import { FC, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IFXFormProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
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
  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={submitHandler(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FXForm;
