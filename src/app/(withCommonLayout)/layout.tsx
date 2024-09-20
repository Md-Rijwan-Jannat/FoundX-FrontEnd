import { FC } from "react";

import Footer from "@/src/components/ui/footer";
import { Navbar } from "@/src/components/ui/navbar";
import NavBlurEffect from "@/src/components/ui/navbar/navBlurEffect";
import MobileNumberReminder from "@/src/components/ui/modal/mobileNumberReminderModal";

type TCommonLayoutProps = {
  children: React.ReactNode;
};

const CommonLayout: FC<TCommonLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBlurEffect />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <MobileNumberReminder />
    </div>
  );
};

export default CommonLayout;
