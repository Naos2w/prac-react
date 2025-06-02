import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle to {theme === "light" ? "深色" : "淺色"} theme
    </button>
  );
};

export default ThemeToggle;
