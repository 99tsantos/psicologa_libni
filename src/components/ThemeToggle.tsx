"use client";

import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useTranslations } from "next-intl";

const THEME_STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const t = useTranslations("theme");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      nextIsDark ? "dark" : "light",
    );
  };

  return (
    <button
      type="button"
      aria-label={isDark ? t("light") : t("dark")}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="text-theme-foreground cursor-pointer"
    >
      {isDark ? (
        <SunIcon color="currentColor" className="w-6 h-6" />
      ) : (
        <MoonIcon color="currentColor" className="w-6 h-6" />
      )}
    </button>
  );
}
