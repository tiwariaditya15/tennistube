import { useState, useLayoutEffect } from "react";
export function useTheme() {
  const [theme, setTheme] = useState("dark");
  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return {
    toggleTheme,
  };
}
