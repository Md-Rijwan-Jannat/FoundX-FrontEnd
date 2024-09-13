import { FC } from "react";
import { Button } from "@nextui-org/button";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

const SocialLogin: FC = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 items-center">
      <div className="flex flex-col md:flex-row items-center gap-3 justify-between w-full">
        {/* Google Sign In */}
        <Button
          startContent={<FaGoogle size={22} />}
          className="w-full"
          color="default"
          variant="solid"
          radius="full"
          size="lg"
        >
          Sign in with Google
        </Button>

        {/* Facebook Sign In */}
        <Button
          startContent={<FaFacebookF size={22} />}
          className="w-full"
          color="primary"
          variant="solid"
          radius="full"
          size="lg"
        >
          Sign in with Facebook
        </Button>
      </div>
      {/* GitHub Sign In */}
      <Button
        startContent={<FaGithub size={22} />}
        className="bg-gray-800 w-full md:w-1/2"
        color="default"
        variant="solid"
        radius="full"
        size="lg"
      >
        Sign in with GitHub
      </Button>
    </div>
  );
};

export default SocialLogin;
