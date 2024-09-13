"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="toggle-theme">
        <Image
          className="w-6 cursor-pointer sun text-dark dark:text-white"
          src={`${
            currentTheme === "dark"
              ? "/assets/svg/sun.svg"
              : "/assets/svg/moon.svg"
          }`}
          alt="user-icon"
          width={100}
          height={100}
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          title={currentTheme === "dark" ? "light mode" : "dark mode"}
        />
      </div>
    </>
  );
}
