import { useCallback, useContext } from "react";
import { ThemeContext } from "../themeProvider";

export default function useTheme() {
  const { mode, setMode } = useContext(ThemeContext);

  const isDark = mode === "dark" ? true : false;

  const toggleTheme = useCallback(() => {
    isDark ? localStorage.setItem("theme", "light") : localStorage.setItem("theme","dark");
    setMode((modes) => (modes === "dark" ? "light" : "dark"));
  }, [setMode,isDark]);

  return {
    isDark,
    toggleTheme,
  };
}
