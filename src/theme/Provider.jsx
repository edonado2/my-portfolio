import { createTheme } from "@mui/material";
import { useState } from "react";

export const useProvider = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return { theme, darkMode, handleThemeChange };
};
