import Container from "@/src/components/ui/container";
import { FC, ReactNode } from "react";

type TUserProfileProps = { children: ReactNode };

const UserProfile: FC<TUserProfileProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default UserProfile;
