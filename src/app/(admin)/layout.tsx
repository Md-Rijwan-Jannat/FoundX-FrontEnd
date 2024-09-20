import { FC, ReactNode } from "react";

import Container from "@/src/components/ui/container";

type TAdminLayoutProps = { children: ReactNode };

const AdminLayout: FC<TAdminLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AdminLayout;
