"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface IThemeContext {
  theme: string;
  systemSelected: boolean;
  setTheme: (value: "system" | "light" | "dark") => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [systemTheme, setSystemTheme] = useState<string>("");
  const [systemSelected, setSystemSelected] = useState<boolean>(false);

  // Effect to safely access localStorage and set theme after component mount
  // detects system theme
  useEffect(() => {
    let savedTheme = localStorage.getItem("theme") || "system";

    // fallback in case local storage gets altered
    savedTheme =
      savedTheme !== "system" && savedTheme !== "dark" && savedTheme !== "light"
        ? "system"
        : savedTheme;

    if (savedTheme === "system") {
      setSystemSelected(true);
    } else {
      setTheme(savedTheme);
    }

    // listen system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaQueryChange = (e: { matches: any }) => {
      const theme = e.matches ? "dark" : "light";

      setSystemTheme(theme);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (systemSelected) {
      setTheme(systemTheme);
    }
  }, [systemTheme, systemSelected]);

  useEffect(() => {
    const root = document.documentElement;

    // for normal css styling
    root.setAttribute("data-theme", theme);

    // for tailwind styling
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = (theme: string) => {
    if (!theme) {
      throw new Error("Valid theme value is required");
    }

    if (theme === "system") {
      setSystemSelected(true);
    } else {
      setTheme(theme);
      setSystemSelected(false);
    }

    // store in localstorage
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, systemSelected, setTheme: handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
