"use client";

import RegisterForm from "@/src/components/form/RegisterForm";
import RegisterSkeleton from "@/src/components/ui/skeleton/registerSkeleton";
import { FC, Suspense } from "react";

type TRegisterPageProps = object;

const RegisterPage: FC<TRegisterPageProps> = () => {
  return (
    <Suspense fallback={<RegisterSkeleton />}>
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
