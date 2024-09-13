"use client";

import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { SunFilledIcon, MoonFilledIcon } from "@/src/components/ui/icons";
import { Button } from "@nextui-org/button";

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
        className
      )}
    >
      <VisuallyHidden>
        {/* Hidden input for accessibility */}
        <input
          type="checkbox"
          aria-label="Theme switch"
          checked={isLightTheme}
          onChange={toggleTheme}
        />
      </VisuallyHidden>
      <Button
        isIconOnly
        onClick={toggleTheme}
        color="secondary"
        variant="flat"
        radius="full"
        aria-label={`Switch to ${isLightTheme ? "dark" : "light"} mode`}
        className="flex items-center justify-center"
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
