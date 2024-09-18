"use client";

import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import { SunFilledIcon, MoonFilledIcon } from "@/src/components/ui/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLightTheme = theme === "light" || resolvedTheme === "light";

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <div
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        className,
      )}
    >
      <VisuallyHidden>
        {/* Hidden input for accessibility */}
        <input
          aria-label="Theme switch"
          checked={isLightTheme}
          type="checkbox"
          onChange={toggleTheme}
        />
      </VisuallyHidden>
      <Button
        isIconOnly
        aria-label={`Switch to ${isLightTheme ? "dark" : "light"} mode`}
        className="flex items-center justify-center"
        color="secondary"
        radius="full"
        variant="flat"
        onClick={toggleTheme}
      >
        {isLightTheme ? (
          <SunFilledIcon className="text-secondary" size={22} />
        ) : (
          <MoonFilledIcon className="text-secondary" size={22} />
        )}
      </Button>
    </div>
  );
};
