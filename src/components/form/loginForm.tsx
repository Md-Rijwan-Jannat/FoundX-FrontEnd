"use client";

import { FC } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "@/src/components/ui/logo";
import FXInput from "@/src/components/form/FXInput";
import loginValidationSchema from "@/src/schema/login.schema";
import { useUserLoginMutation } from "@/src/hooks/auth.hook";
import envConfig from "@/src/config/envConfig";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/userProvider";
import FXForm from "../form/FXForm";
import { SocialLogin } from "./SocialLogin";

type TLoginFormProps = object;

const LoginForm: FC<TLoginFormProps> = () => {
  const { setIsLoading: userLoading } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();

  const { mutate: UserLoginFn, isPending, isSuccess } = useUserLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const registrationData = {
      ...data,
      profilePhoto: envConfig.default_image as string,
    };

    UserLoginFn(registrationData);
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
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <Card className="max-w-xl w-full px-2 py-6 md:p-6">
        <CardHeader className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-default-800 flex items-center gap-2">
            <Logo />
          </h2>
          <p className="text-default-500 mt-2 text-center">
            Welcome back! Please login to your account.
          </p>
        </CardHeader>
        <CardBody>
          <FXForm
            defaultValues={{
              email: "rijwanjannat@gmail.com",
              password: "123456",
            }}
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <FXInput
              name="email"
              placeholder="Email"
              startContent={<FaUserAlt className="text-default-500" />}
              type="email"
            />
            <FXInput
              name="password"
              placeholder="Password"
              startContent={<FaLock className="text-default-500" />}
              type="password"
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
                Log In
              </Button>
            </div>
          </FXForm>

          <SocialLogin />
        </CardBody>
        <CardFooter className="mt-4 flex justify-center">
          <p className="text-sm text-default-500">
            Do not have an account?{" "}
            <Link className="text-blue-600 font-semibold" href="/auth/register">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
