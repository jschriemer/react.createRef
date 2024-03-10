import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#D3D3D3",
        paper: "#fe914c",
      },
      text: {
        primary: "#F5F5F5",
        secondary: "#F5F5F5" //"#2A2B2A",
      },
      primary: {
        main: "#F15A23",
      },
      secondary: {
        main: "#266BBC",
      },
      info: {
        main: "#526F48",
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
