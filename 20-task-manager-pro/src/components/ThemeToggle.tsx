import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return theme === "light" ? (
    <IconButton onClick={toggleTheme}>
      <DarkModeIcon />
    </IconButton>
  ) : (
    <IconButton onClick={toggleTheme}>
      <LightModeIcon />
    </IconButton>
  );
};

export default ThemeToggle;
