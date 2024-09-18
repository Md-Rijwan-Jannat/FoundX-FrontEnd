import Link from "next/link";
import { FC } from "react";

type TLink = {
  href: string;
  label: string;
}[];

type TSidebarOptionsProps = {
  sidebarLink: TLink;
};

const SidebarOptions: FC<TSidebarOptionsProps> = ({ sidebarLink }) => {
  return (
    <div className="bg-default-50 rounded-md p-2">
      <h2 className="my-5 text-sm text-default-500">Profile</h2>
      <div className="flex flex-col items-start gap-3">
        {sidebarLink.map((link) => (
          <Link
            key={link.href}
            className="bg-secondary-400 px-3 py-1 rounded-md text-default-200 text-sm font-normal w-full"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarOptions;
