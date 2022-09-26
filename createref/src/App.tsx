import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { createMuiTheme, ThemeProvider, Typography } from "@mui/material";
import "./fonts.css";
import background from "./images/backgroundlines.png";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Sora", "sans-serif"].join(","),
  },
});

function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Navbar />
      <Parallax
        ref={parallax}
        pages={2}
        style={{ top: "0", left: "0", background: "beige" }}
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "2%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          <ThemeProvider theme={theme}>
            <div>
              <Typography
                variant="h1"
                style={{ textDecoration: "none", color: "orange" }}
              >
                Kona Care Land Scaping
              </Typography>
              <button
                className="button-77"
                role="button"
                style={{ marginTop: "40px" }}
                onClick={() => parallax.current.scrollTo(2)}
              >
                Book Now
              </button>
            </div>
          </ThemeProvider>
          <img
            src={require("./images/kona_care_logo.PNG")}
            style={{ width: "100%", height: "auto", maxWidth: "35vw" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={require("./images/services.png")}
            style={{ width: "100%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "orange" }}
        >
          <section>
            <div className="curve"></div>
            <Footer parallax={parallax} />
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Form />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
