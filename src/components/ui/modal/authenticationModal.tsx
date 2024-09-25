import { FC } from "react";
import FXModal from ".";
import { Button } from "@nextui-org/button";
import Link from "next/link";

type TAuthenticationModalProps = {
  itemId: string;
};

const AuthenticationModal: FC<TAuthenticationModalProps> = ({ itemId }) => {
  // Construct redirect URLs without /auth prefix
  const registerRedirectUrl = `/auth/register?redirect=/found-items/item/${itemId}`;
  const loginRedirectUrl = `/auth/login?redirect=/found-items/item/${itemId}`;

  return (
    <FXModal
      buttonClassName="flex-1"
      buttonColor="secondary"
      buttonText="Claim item"
      buttonVariant="faded"
      title="Authentication"
    >
      <p>You are not currently logged in. Please log in first to continue.</p>

      <div className="w-full mx-auto flex justify-between ">
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

export default AuthenticationModal;
