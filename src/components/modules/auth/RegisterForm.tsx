"use client";

import { FC, Suspense } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FaUserAlt, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useUserRegistrationMutation } from "@/src/hooks/auth.hook";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Logo from "@/src/components/ui/logo";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import registerValidationSchema from "@/src/schema/register.schema";
import envConfig from "@/src/config/envConfig";
import { useRouter, useSearchParams } from "next/navigation";
import SocialRegister from "./SocialRegister";
import { useUser } from "@/src/context/userProvider";

export type TSessionProps = {
  session: {
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
  } | null;
};

const RegisterForm: FC = () => {
  const { setIsLoading: userLoading } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();

  const {
    mutate: UserRegistrationFn,
    isPending,
    isSuccess,
  } = useUserRegistrationMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const registrationData = {
      ...data,
      profilePhoto: envConfig.default_image as string,
    };

    UserRegistrationFn(registrationData);
    userLoading(true);
  };

  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div
        className="flex flex-col items-center justify-center min-h-screen p
    -2"
      >
        <Card className="max-w-xl w-full px-2 py-6 md:p-6">
          <CardHeader className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-default-800 flex items-center gap-2">
              <Logo />
            </h2>
            <p className="text-default-500 mt-2 text-center">
              Create a new account to get started.
            </p>
          </CardHeader>
          <CardBody>
            <FXForm
              defaultValues={{
                name: "Md Rijwan Jannat",
                email: "mdrijwanjannat@gmail.com",
                password: "123456",
                mobileNumber: "01798660947",
              }}
              resolver={zodResolver(registerValidationSchema)}
              onSubmit={onSubmit}
            >
              <FXInput
                isRequired={true}
                name="name"
                placeholder="Name"
                size="md"
                startContent={<FaUserAlt className="text-default-500" />}
                type="text"
              />
              <FXInput
                isRequired={true}
                name="email"
                placeholder="Email"
                size="md"
                startContent={<FaEnvelope className="text-default-500" />}
                type="email"
              />
              <FXInput
                isRequired={true}
                name="password"
                placeholder="Password"
                size="md"
                startContent={<FaLock className="text-default-500" />}
                type="password"
              />
              <FXInput
                isRequired={true}
                name="mobileNumber"
                placeholder="Mobile Number"
                size="md"
                startContent={<FaPhoneAlt className="text-default-500" />}
                type="tel"
              />
              <div className="w-full mx-auto flex justify-center">
                <Button
                  className="w-32 mt-3"
                  color="secondary"
                  isLoading={isPending}
                  radius="md"
                  size="md"
                  type="submit"
                  variant="solid"
                >
                  Sign Up
                </Button>
              </div>
            </FXForm>
            <SocialRegister />
          </CardBody>
          <CardFooter className="mt-4 flex justify-center">
            <p className="text-sm text-default-500">
              Already have an account?{" "}
              <Link className="text-blue-600 font-semibold" href="/auth/login">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Suspense>
  );
};

export default RegisterForm;
