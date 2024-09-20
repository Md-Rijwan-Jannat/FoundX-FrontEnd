"use client";

import { signIn, getSession } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import AxiosInstance from "@/src/lib/AxiosInstance/axiosInstance";

// Function to check if the user already exists
const checkUserExists = async (email: string) => {
  try {
    const response = await AxiosInstance.get(
      `/auth/user-exists?email=${email}`
    );
    return response.data.exists;
  } catch (error) {
    console.error("Error checking user existence:", error);
    return false;
  }
};

// Function to log in user
const loginUser = async (email: string) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", { email });

    if (data.success) {
      Cookies.set("accessToken", data.data.accessToken);
      Cookies.set("refreshToken", data.data.refreshToken);
      toast.success("Login successful!");
    }

    return data;
  } catch (error: any) {
    toast.error("Login failed. Please try again.");
    throw new Error(error);
  }
};

export const SocialLogin = () => {
  // Function to handle social sign-in
  const handleSocialSignIn = async (
    provider: "google" | "facebook" | "github"
  ) => {
    await signIn(provider, {
      callbackUrl: `${window.location.origin}`,
    });

    const updatedSession = await getSession();

    if (updatedSession) {
      const { email } = updatedSession.user || {};

      // Case: If no email is returned, handle it (e.g., Facebook)
      if (!email) {
        toast.error("No email provided by provider.");
        return;
      }

      // Check if the user exists
      const userExists = await checkUserExists(email);

      if (userExists) {
        // Log in if the user exists
        await loginUser(email);
      } else {
        // Show a message asking the user to register first
        toast.error("User not found. Please register first.");
      }
    } else {
      toast.error("Failed to retrieve session after sign-in.");
    }
  };

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
