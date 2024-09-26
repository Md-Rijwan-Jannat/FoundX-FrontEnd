import { FC } from "react";
import FXModal from ".";
import { Button } from "@nextui-org/button";
import Link from "next/link";

type TPostAuthenticationModalProps = object;

const PostAuthenticationModal: FC<TPostAuthenticationModalProps> = () => {
  // Construct redirect URLs for the profile create-post path
  const registerRedirectUrl = `/auth/register?redirect=/profile/create-post`;
  const loginRedirectUrl = `/auth/login?redirect=/profile/create-post`;

  return (
    <FXModal
      buttonClassName="flex-1"
      buttonColor="secondary"
      buttonRadius="full"
      buttonText="Post Item"
      buttonVariant="bordered"
      title="Authentication"
    >
      <p>You are not currently logged in. Please log in first to continue.</p>

      <div className="w-full mx-auto flex justify-between">
        <Button
          as={Link}
          className="w-[150px] mb-5"
          color="secondary"
          href={registerRedirectUrl}
          type="submit"
          variant="faded"
        >
          Register
        </Button>
        <Button
          as={Link}
          className="w-[150px] mb-5"
          color="default"
          href={loginRedirectUrl}
          type="submit"
        >
          Login
        </Button>
      </div>
    </FXModal>
  );
};

export default PostAuthenticationModal;
