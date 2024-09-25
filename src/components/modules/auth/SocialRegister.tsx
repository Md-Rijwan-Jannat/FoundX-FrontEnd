import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import envConfig from "@/src/config/envConfig";
import Cookies from "js-cookie";
import { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/userProvider";
import AxiosInstanceClient from "@/src/lib/AxiosInstance/clientAxiosInstance";

type TSocialUser = {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  profilePhoto: string;
};

interface TUserExistsResponse {
  success: boolean;
  data: { exists: boolean };
  message: string;
}

interface RegisterResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export const SocialRegister: FC = () => {
  const { data: currentSession } = useSession();
  const [isRegistering, setIsRegistering] = useState(false);
  const { setIsLoading: userLoading } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();

  const handleUserRegister = async (userData: TSocialUser) => {
    try {
      const { data }: { data: RegisterResponse } =
        await AxiosInstanceClient.post("/auth/register", userData);

      if (data.success) {
        Cookies.set("accessToken", data.data.accessToken);
        Cookies.set("refreshToken", data.data.refreshToken);
        toast.success("Registration successful!");
        router.push(redirect ? redirect : "/");
      }
    } catch (error) {
      signOut();
    }
  };

  const handleSocialSignIn = async (provider: "google" | "github") => {
    if (!currentSession) {
      await signIn(provider);
    }
  };

  useEffect(() => {
    const registerSocialUser = async () => {
      if (currentSession && currentSession.user && !isRegistering) {
        setIsRegistering(true);
        const { name, email, image } = currentSession.user;

        try {
          const { data: userExists }: { data: TUserExistsResponse } =
            await AxiosInstanceClient.get(`/auth/user-exists?email=${email}`);

          if (!userExists?.data?.exists) {
            const registrationData: TSocialUser = {
              name: name as string,
              email: email as string,
              password: envConfig.social_user_password as string,
              mobileNumber: envConfig.social_user_mobile_number as string,
              profilePhoto: image as string,
            };

            await handleUserRegister(registrationData);
            userLoading(true);
          } else {
            toast.error("Your already register. Please login");
            await signOut();
          }
        } catch (error) {
          await signOut();
        }
      }
    };

    registerSocialUser();
  }, [currentSession, isRegistering]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 justify-between w-full mt-5">
      <Button
        className="w-full"
        color="default"
        radius="full"
        size="md"
        startContent={<FcGoogle size={20} />}
        variant="solid"
        onClick={() => handleSocialSignIn("google")}
      >
        Sign up with Google
      </Button>

      <Button
        className="w-full"
        color="default"
        radius="full"
        size="md"
        startContent={<FaGithub size={20} />}
        variant="faded"
        onClick={() => handleSocialSignIn("github")}
      >
        Sign up with GitHub
      </Button>
    </div>
  );
};

export default SocialRegister;
