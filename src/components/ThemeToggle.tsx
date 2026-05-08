import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme");
    
    // Check if theme is stored, otherwise check system preference
    const isDarkTheme = initialTheme === "dark" || (!initialTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-all duration-300 text-foreground group relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <Sun className={`absolute inset-0 h-5 w-5 transition-transform duration-500 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
        <Moon className={`absolute inset-0 h-5 w-5 transition-transform duration-500 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      </div>
    </button>
  );
}
