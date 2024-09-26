import { FC, ReactNode } from "react";

type TLayoutProps = { children: ReactNode; recentPosts: ReactNode };

const layout: FC<TLayoutProps> = ({ children, recentPosts }) => {
  return (
    <>
      {children}
      {recentPosts}
    </>
  );
};

export default layout;
