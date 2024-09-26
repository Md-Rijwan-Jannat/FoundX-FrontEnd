import NoDataAnimation from "@/src/components/ui/noData";
import { FC } from "react";

type TSettingPageProps = object;

const SettingPage: FC<TSettingPageProps> = () => {
  return (
    <div>
      <NoDataAnimation />
    </div>
  );
};

export default SettingPage;
