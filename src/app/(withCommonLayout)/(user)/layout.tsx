import { FC, ReactNode } from "react";

import Container from "@/src/components/ui/container";
import Sidebar from "@/src/components/ui/sidebar";

type TUserProfileProps = { children: ReactNode };

const UserProfile: FC<TUserProfileProps> = ({ children }) => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/5">
          <Sidebar />
        </div>
        <div className="w-full md:w-4/5">{children}</div>
      </div>
    </Container>
  );
};

export default UserProfile;
