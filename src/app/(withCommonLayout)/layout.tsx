import Footer from "@/src/components/ui/footer/footer";
import { Navbar } from "@/src/components/ui/navbar/navbar";
import { FC } from "react";

type TCommonLayoutProps = {
  children: React.ReactNode;
};

const CommonLayout: FC<TCommonLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
