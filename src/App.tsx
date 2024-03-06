import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#F5F5F5",
        paper: "#D8D4D5",
      },
      text: {
        primary: "#2A2B2A",
        secondary: "#F5F5F5",
      },
      primary: {
        main: "#A26287",
      },
      secondary: {
        main: "#C4C699",
      },
      info: {
        main: "#453750",
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
      },
      h3: {
        fontFamily: "Futura",
      },
      h6: {
        fontFamily: "Futura",
        fontSize: "16px",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
