import { FC } from "react";

type TContainerProps = {
  children: React.ReactNode;
};

const Container: FC<TContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-7xl pt-8 px-2 md:px-8 flex-grow">
      {children}
    </div>
  );
};

export default Container;
