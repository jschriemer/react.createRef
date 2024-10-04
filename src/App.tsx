import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#D3D3D3",
        paper: "#fe914c",
      },
      text: {
        primary: "#2A2B2A",
        secondary: "#F5F5F5", //"#2A2B2A",
      },
      primary: {
        main: "#F15A23",
      },
      secondary: {
        main: "#266BBC",
      },
      info: {
        main: "#F5F5F5",
      },
      error: {
        main: "#F15A23",
      },
      success: {
        main: "#266BBC",
      },
    },
    typography: {
      fontFamily: "Futura",
      h1: {
        fontFamily: "Futura",
        fontWeight: "bold",
      },
      h2: {
        fontFamily: "Futura",
        fontWeight: "bold",
      },
      h3: {
        fontFamily: "Futura",
        fontWeight: "bold",
      },
      h4: {
        fontFamily: "Futura",
        fontWeight: "bold",
      },
      h6: {
        fontFamily: "Futura",
        fontSize: "16px",
      },
      body1: {
        fontFamily: "Futura",
        fontWeight: 300,
        fontSize: "16px",
      },
    },
  });
  //

  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <SpeedInsights />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
