import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import { Grid } from "@mui/material";

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
    fontFamily: "Roboto Mono",
    h1: {
      fontFamily: "Roboto Mono",
    },
    h2: {
      fontFamily: "EB Garamond",
    },
    h3: {
      fontFamily: "Roboto Mono",
    },
    h6: {
      fontFamily: "Roboto Mono",
      fontSize: "16px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
