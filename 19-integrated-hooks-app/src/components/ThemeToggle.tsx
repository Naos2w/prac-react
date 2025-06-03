import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="themeToggle" onClick={toggleTheme}>
      Toggle to {theme === "light" ? "Dark" : "light"} theme
    </button>
  );
};
