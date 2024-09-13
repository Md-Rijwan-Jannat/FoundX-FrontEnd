import { FC } from "react";

type TSectionTitleProps = {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left" | "right";
};

const SectionTitle: FC<TSectionTitleProps> = ({
  title,
  subtitle,
  alignment = "center",
}) => {
  return (
    <div className={`text-${alignment} my-6 w-[85%] md:w-[50%] mx-auto`}>
      <h2 className="text-xl font-bold text-default-800">{title}</h2>
      {subtitle && (
        <p className="text-sm font-normal text-default-500">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
