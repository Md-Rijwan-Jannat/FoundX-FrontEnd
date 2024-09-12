import Container from "@/src/components/ui/container";
import { FC, ReactNode } from "react";

type TAdminLayoutProps = { children: ReactNode };

const AdminLayout: FC<TAdminLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AdminLayout;
