"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/userProvider";
import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import Cookies from "js-cookie";
import envConfig from "@/src/config/envConfig";

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
  const router = useRouter();
  const { setUser } = useUser();

  const handleUserLogin = async (userData: TSocialUserLogin) => {
    try {
      const { data: userExists }: { data: TUserExistsResponse } =
        await AxiosInstance.get(`/auth/user-exists?email=${userData.email}`);

      if (userExists?.data?.exists) {
        toast.error("User already exists. Please log in.");
        // signOut();

        return;
      } else {
        toast.error(userExists?.message);
      }

      const { data }: { data: TLoginResponse } = await AxiosInstance.post(
        "/auth/login",
        userData
      );

      if (data.success) {
        Cookies.set("accessToken", data.data.accessToken);
        Cookies.set("refreshToken", data.data.refreshToken);
        toast.success("Login successful!");

        const { name, email, image } = currentSession?.user || {};

        setUser({
          _id: "",
          name: name || "",
          email: email || "",
          mobileNumber: envConfig.social_user_mobile_number as string,
          profilePhoto: image || "",
          role: "USER",
          status: "active",
          iat: 0,
          exp: 0,
        });

        router.push("/");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
      signOut();
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

        const userLoginData: TSocialUserLogin = {
          email: email as string,
          password: envConfig.social_user_password as string,
        };

        await handleUserLogin(userLoginData);
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
