import { FC } from "react";
import Footer from "@/src/components/ui/footer";
import { Navbar } from "@/src/components/ui/navbar";
import NavBlurEffect from "@/src/components/ui/navbar/navBlurEffect";
import MobileNumberReminder from "@/src/components/ui/modal/mobileNumberReminderModal";
import { Metadata } from "next";
import Container from "@/src/components/ui/container";

type TCommonLayoutProps = {
  children: React.ReactNode;
};

// Define metadata for the Common Layout (Home Page)
export const metadata: Metadata = {
  title: "FoundX | Your Lost and Found Solution",
  description:
    "FoundX is the ultimate platform to help you find and reunite lost items. Discover a community-driven approach to finding your lost belongings.",
  keywords: [
    "lost and found",
    "FoundX",
    "reunite lost items",
    "found items",
    "community",
  ],
};

const CommonLayout: FC<TCommonLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBlurEffect />
      <Navbar />
      <Container>
        <main className="min-h-screen">{children}</main>
        <MobileNumberReminder />
        <Footer />
      </Container>
    </div>
  );
};

export default CommonLayout;
