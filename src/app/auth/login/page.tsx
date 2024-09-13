import { FC } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Logo from "@/src/components/ui/logo";
import Link from "next/link";

type TLoginPageProps = object;

const LoginPage: FC<TLoginPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="max-w-md w-full p-6 shadow-lg" isHoverable>
        <CardHeader className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-default-800 flex items-center gap-2">
            <Logo />
          </h2>
          <p className="text-default-500 mt-2">
            Welcome back! Please login to your account.
          </p>
        </CardHeader>
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
