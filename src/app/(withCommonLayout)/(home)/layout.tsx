import Container from "@/src/components/ui/container";
import { FC, ReactNode } from "react";

type TLayoutProps = { children: ReactNode; recentPosts: ReactNode };

const layout: FC<TLayoutProps> = ({ children, recentPosts }) => {
  return (
    <Container>
      {children}
      {recentPosts}
    </Container>
  );
};

export default layout;
