import { FC } from "react";
import { Button } from "@nextui-org/button";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin: FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 items-center">
      <div className="flex flex-col md:flex-row items-center gap-3 justify-between w-full">
        {/* Google Sign In */}
        <Button
          className="w-full"
          color="default"
          radius="full"
          size="md"
          startContent={<FcGoogle size={20} />}
          variant="solid"
        >
          Sign in with Google
        </Button>

        {/* Facebook Sign In */}
        <Button
          className="w-full"
          color="primary"
          radius="full"
          size="md"
          startContent={<FaFacebookF size={20} />}
          variant="solid"
        >
          Sign in with Facebook
        </Button>
      </div>
      {/* GitHub Sign In */}
      <Button
        className="w-full md:w-1/2"
        color="default"
        radius="full"
        size="md"
        startContent={<FaGithub size={20} />}
        variant="faded"
      >
        Sign in with GitHub
      </Button>
    </div>
  );
};

export default SocialLogin;
