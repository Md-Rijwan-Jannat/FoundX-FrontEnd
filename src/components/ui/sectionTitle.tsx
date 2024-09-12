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
    <div className={`text-${alignment} my-6 w-[90%] md:w-[80%] mx-auto`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-sm font-normal">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
