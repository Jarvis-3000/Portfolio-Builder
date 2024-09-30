"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

export const ThemeToggler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  const onChange = (theme: "system" | "light" | "dark") => {
    setTheme(theme);
    setIsOpen(false);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#theme-toggler")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="theme-toggler"
      className={`fixed z-50 flex flex-row gap-4 items-end bottom-8 right-8`}
    >
      {/* Theme Options Menu */}
      {isOpen && (
        <div className="bg-white text-black dark:text-white dark:bg-gray-700 p-2 rounded shadow-md flex flex-col gap-2">
          <button
            onClick={() => onChange("light")}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Sun className="h-5 w-5" />
            Light
          </button>
          <button
            onClick={() => onChange("dark")}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Moon className="h-5 w-5" />
            Dark
          </button>
          <button
            onClick={() => onChange("system")}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Laptop className="h-5 w-5" />
            System
          </button>
        </div>
      )}

      {/* FAB Button */}
      <button
        className="p-2 border-none bg-gray-500 dark:bg-gray-200 rounded-lg drop-shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sun className="h-6 w-6 block dark:hidden text-white" />
        <Moon className="h-6 w-6 hidden dark:block text-gray-800" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
};
