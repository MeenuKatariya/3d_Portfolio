// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5 text-white" />
      ) : (
        <FaRegMoon className="w-5 h-5 text-black" />
      )}
    </div>
  );
}
