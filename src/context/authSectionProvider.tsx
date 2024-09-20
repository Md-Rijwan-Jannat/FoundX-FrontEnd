import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

type TAuthSectionProviderProps = {
  children: ReactNode;
};

const AuthSectionProvider: FC<TAuthSectionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthSectionProvider;
