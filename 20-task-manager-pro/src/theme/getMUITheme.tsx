import { createTheme } from "@mui/material/styles";

export const getMuiTheme = (mode: "light" | "dark") => {
  const selectedStyle = {
    "&.Mui-selected": {
      backgroundColor: mode === "light" ? "#1976d2" : "#90caf9",
      color: mode === "light" ? "#fff" : "#000",
    },
    "&.Mui-selected:hover": {
      backgroundColor: mode === "light" ? "#115293" : "#e3f2fd",
    },
  };

  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" },
            background: { default: "#fff" },
          }
        : {
            primary: { main: "#90caf9" },
            background: { default: "#121212" },
          }),
    },
    components: {
      // 在 components 裡
      MuiMenuItem: { styleOverrides: { root: selectedStyle } },
      MuiListItem: { styleOverrides: { root: selectedStyle } },
      MuiToggleButton: { styleOverrides: { root: selectedStyle } },
    },
  });
};
