import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "@fontsource/roboto";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      light: "#A6D4FA",
      dark: "#648DAE",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#ef8daf",
      light: "#F2A3BF",
      dark: "#A7627A",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
          fontWeight: "bolder",
        },
      },
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
    containerBorderRadius: 24,
  },
});

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
