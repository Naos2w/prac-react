import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Box, Switch, styled } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// 自訂 styled Switch
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 38,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transform: "translateX(6px) translateY(2px)",
    "&.Mui-checked": {
      transform: "translateX(22px) translateY(2px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#56626c",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "transparent",
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 1,
    backgroundColor: "#dfefff",
    opacity: 1,
  },
}));

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <Box display="flex" alignItems="center">
      <CustomSwitch
        checked={isDark}
        onChange={toggleTheme}
        disableRipple
        icon={
          <Box
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LightModeIcon sx={{ fontSize: 20, color: "#fbc02d" }} />
          </Box>
        }
        checkedIcon={
          <Box
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DarkModeIcon sx={{ fontSize: 20, color: "#90caf9" }} />
          </Box>
        }
      />
    </Box>
  );
};

export default ThemeToggle;
