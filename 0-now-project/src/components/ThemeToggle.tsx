import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Box, Switch, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <Box display="flex" alignItems="center">
      <LightModeIcon sx={{ color: isDark ? "#888" : "#f1c232" }} />
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#90caf9",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#90caf9",
          },
        }}
      />
      <DarkModeIcon sx={{ color: isDark ? "#90caf9" : "#888" }} />
    </Box>
  );
};

export default ThemeToggle;
