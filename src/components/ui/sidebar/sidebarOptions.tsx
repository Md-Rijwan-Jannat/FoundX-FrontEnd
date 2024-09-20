"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type TLink = {
  href: string;
  label: string;
}[];

type TSidebarOptionsProps = {
  sidebarLinks: TLink;
};

const SidebarOptions: FC<TSidebarOptionsProps> = ({ sidebarLinks }) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    const baseClasses =
      "px-3 py-1 rounded-md text-sm font-normal w-full transition-colors duration-250";

    const textColor =
      theme === "dark" ? "text-default-600" : "text-default-200";

    const bgColor = isActive
      ? theme === "dark"
        ? "bg-secondary-400"
        : "bg-secondary-500"
      : theme === "dark"
        ? "bg-secondary-500"
        : "bg-secondary-400";

    return `${baseClasses} ${textColor} ${bgColor}`;
  };

  return (
    <div className="bg-default-50 rounded-md p-2">
      <h2 className="my-5 text-sm text-default-500">Profile</h2>
      <div className="flex flex-col items-start gap-3">
        {sidebarLinks && sidebarLinks.length > 0 ? (
          sidebarLinks.map((link) => (
            <Link
              key={link.href}
              className={getLinkClasses(link.href)}
              href={link.href}
            >
              {link.label}
            </Link>
          ))
        ) : (
          <p className="text-default-500 text-sm">No links available</p>
        )}
      </div>
    </div>
  );
};

export default SidebarOptions;
