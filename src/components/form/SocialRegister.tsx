"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";
import envConfig from "@/src/config/envConfig";
import Cookies from "js-cookie";
import { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const SocialRegister: FC = () => {
  const { data: currentSession } = useSession();
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  // Function to handle user registration
  const handleUserRegister = async (userData: any) => {
    try {
      // Check if the user already exists
      const { data: userExists } = await AxiosInstance.get(
        `/auth/user-exists?email=${userData?.email}`
      );

      if (userExists.exists) {
        toast.error("User already exists. Please log in.");
        signOut();

        return;
      }

      // Register the user if they do not exist
      const { data } = await AxiosInstance.post("/auth/register", userData);

      if (data.success) {
        Cookies.set("accessToken", data.data.accessToken);
        Cookies.set("refreshToken", data.data.refreshToken);
        toast.success("Registration successful!");

        router.push("/");
      }

      return data;
    } catch (error: any) {
      toast.error("User already exists. Please log in.");
      signOut();
    }
  };

  // Function to handle social sign-in
  const handleSocialSignIn = async (
    provider: "google" | "facebook" | "github"
  ) => {
    if (!currentSession) {
      // Initiate sign-in with NextAuth
      await signIn(provider);
    }
  };

  // Trigger user registration if session is available and user is not yet registered
  useEffect(() => {
    const registerSocialUser = async () => {
      if (currentSession && currentSession.user && !isRegistering) {
        setIsRegistering(true);
        const { name, email, image } = currentSession.user;

        // Prepare the registration data
        const registrationData = {
          name,
          email,
          password: envConfig.social_user_password,
          mobileNumber: envConfig.social_user_mobile_number,
          profilePhoto: image || envConfig.default_image,
        };

        await handleUserRegister(registrationData);
      }
    };

    if (currentSession && !isRegistering) {
      registerSocialUser();
    }
  }, [currentSession, isRegistering]);

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
          onClick={() => handleSocialSignIn("google")}
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
          onClick={() => handleSocialSignIn("facebook")}
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
        onClick={() => handleSocialSignIn("github")}
      >
        Sign in with GitHub
      </Button>
    </div>
  );
};

export default SocialRegister;
