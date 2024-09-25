"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/userProvider";
import Cookies from "js-cookie";
import envConfig from "@/src/config/envConfig";
import AxiosInstanceClient from "@/src/lib/AxiosInstance/clientAxiosInstance";

type TSocialUserLogin = {
  email: string;
  password: string;
};

interface TUserExistsResponse {
  success: boolean;
  data: { exists: boolean };
  message: string;
}

interface TLoginResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const SocialLogin = () => {
  const { data: currentSession } = useSession();
  const [isRegistering, setIsRegistering] = useState(false);
  const { setIsLoading: userLoading } = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();

  const handleUserLogin = async (userData: TSocialUserLogin) => {
    try {
      const { data }: { data: TLoginResponse } = await AxiosInstanceClient.post(
        "/auth/login",
        userData
      );

      if (data.success) {
        Cookies.set("accessToken", data.data.accessToken);
        Cookies.set("refreshToken", data.data.refreshToken);
        toast.success("Login successful!");

        router.push(redirect ? redirect : "/");
      } else {
        await signOut();
      }
    } catch (error) {
      await signOut();
    }
  };

  const handleSocialSignIn = async (provider: "google" | "github") => {
    await signIn(provider);
  };

  useEffect(() => {
    const loginSocialUser = async () => {
      if (currentSession && currentSession.user && !isRegistering) {
        setIsRegistering(true);
        const { email } = currentSession.user;

        try {
          const { data: userExists }: { data: TUserExistsResponse } =
            await AxiosInstanceClient.get(`/auth/user-exists?email=${email}`);

          if (userExists?.data?.exists) {
            const userLoginData: TSocialUserLogin = {
              email: email as string,
              password: envConfig.social_user_password as string,
            };

            await handleUserLogin(userLoginData);
            userLoading(true);
          } else {
            toast.error("Please register an account and login");
            await signOut();
          }
        } catch (error) {
          await signOut();
        }
      }
    };

    loginSocialUser();
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
        Sign in with Google
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
        Sign in with GitHub
      </Button>
    </div>
  );
};

export default SocialLogin;
