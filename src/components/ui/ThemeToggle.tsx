import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import * as Toggle from "@radix-ui/react-toggle";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if theme is already set in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // If not, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty("--color-background", "#121212");
      root.style.setProperty("--color-surface", "#1e1e1e");
      root.style.setProperty("--color-surface-hover", "#2a2a2a");
      root.style.setProperty("--color-border", "#333333");
      root.style.setProperty("--color-text", "#e0e0e0");
      root.style.setProperty(
        "--color-text-secondary",
        "rgba(224, 224, 224, 0.7)"
      );
    } else {
      root.style.setProperty("--color-background", "#f5f5f5");
      root.style.setProperty("--color-surface", "#ffffff");
      root.style.setProperty("--color-surface-hover", "#f0f0f0");
      root.style.setProperty("--color-border", "#e0e0e0");
      root.style.setProperty("--color-text", "#333333");
      root.style.setProperty("--color-text-secondary", "rgba(51, 51, 51, 0.7)");
    }

    // Save theme preference to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Toggle.Root
      pressed={isDark}
      onPressedChange={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      style={{
        backgroundColor: "white",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        borderRadius: "4px",
      }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Toggle.Root>
  );
};

export default ThemeToggle;
