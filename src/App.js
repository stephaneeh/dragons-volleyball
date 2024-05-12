import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./style/app.css";

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";

export default function App() {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div className="themeToggle">
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        </div>
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}
