import { FC, ReactNode } from "react";
import Container from "@/src/components/ui/container";

type TAdminLayoutProps = {
  children: ReactNode;
};

// Metadata for the Admin page
export const metadata = {
  title: "Admin - FoundX",
  description: "Admin dashboard for managing FoundX items.",
  keywords: "admin, foundx, dashboard, management",
  author: "Md Rijwan Jannat",
};

const AdminLayout: FC<TAdminLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AdminLayout;
