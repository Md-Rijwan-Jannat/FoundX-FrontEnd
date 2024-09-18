import { FC, ReactNode } from "react";

import Container from "@/src/components/ui/container";

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
