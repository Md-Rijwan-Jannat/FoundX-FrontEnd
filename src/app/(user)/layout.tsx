import { FC, ReactNode } from "react";
import { Metadata } from "next";
import Container from "@/src/components/ui/container";
import Sidebar from "@/src/app/(user)/_components/sidebar";
import { ProfileNavbar } from "./_components/navbar";

type TUserProfileProps = { children: ReactNode };

// Define metadata for the User Profile page
export const metadata: Metadata = {
  title: "User Profile | FoundX",
  description: "View and manage your user profile in the FoundX platform.",
};

const UserProfile: FC<TUserProfileProps> = ({ children }) => {
  return (
    <>
      <ProfileNavbar />
      <Container>
        <div className="flex flex-col md:flex-row gap-10 scrollbar-hide">
          {/* Fixed Sidebar */}
          <div className="block w-full md:w-[200px] lg:w-[250px] md:fixed top-[80px] h-full z-10">
            <Sidebar />
          </div>

          {/* Scrollable content */}
          <div className="w-full md:w-[70%] xl:w-[77%] ml-auto h-screen overflow-y-auto pr-4 scrollbar-hide">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
