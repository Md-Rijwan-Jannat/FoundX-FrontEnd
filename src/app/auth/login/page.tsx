import { FC } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Logo from "@/src/components/ui/logo";
import Link from "next/link";
import SocialLogin from "@/src/components/form/SocailLogin";

type TLoginPageProps = object;

const LoginPage: FC<TLoginPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-2">
      <Card className="max-w-xl w-full px-2 py-6 md:p-6" isHoverable>
        <CardHeader className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-default-800 flex items-center gap-2">
            <Logo />
          </h2>
          <p className="text-default-500 mt-2 text-center">
            Welcome back! Please login to your account.
          </p>
        </CardHeader>
        <SocialLogin />
        <CardBody className="mt-6">
          <form className="space-y-4">
            <Input
              className="w-full"
              placeholder="Email"
              startContent={<FaUserAlt className="text-default-500" />}
              size="lg"
              type="email"
              variant="faded"
              radius="md"
              isRequired
              aria-label="email"
            />
            <Input
              className="w-full"
              placeholder="Password"
              startContent={<FaLock className="text-default-500" />}
              size="lg"
              type="password"
              variant="faded"
              radius="md"
              isRequired
              aria-label="password"
            />
            <Button
              className="w-full mt-6"
              color="secondary"
              variant="solid"
              radius="md"
              size="lg"
              type="submit"
            >
              Log In
            </Button>
          </form>
        </CardBody>
        <CardFooter className="mt-4 flex justify-center">
          <p className="text-sm text-default-500">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-blue-600 font-semibold">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
