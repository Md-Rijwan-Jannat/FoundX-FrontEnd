import { FC } from "react";

type TContainerProps = {
  children: React.ReactNode;
};

const Container: FC<TContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-7xl pt-5 md:px-8 flex-grow w-full px-2">
      {children}
    </div>
  );
};

export default Container;
