import "./App.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./fonts.css";
import background from "./images/homepage.png";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import React from "react";
import Reviews from "./components/Reviews";
import About from "./components/AboutText";

const USER_ID = process.env.REACT_APP_USER_KEY;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_KEY;
const SERVICES_ID = process.env.REACT_APP_SERVICES_KEY;


function App() {
  const parallax = useRef<IParallax>(null!);

  const handleClick = (offset: number) => {
    console.log("Scrolling to Bottom");
    parallax.current.scrollTo(offset);
  };

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
        style={{ top: "0", left: "0", background: "#D0C9B3" }}
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          factor={1}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "2%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        >
          <Home offset={2} handleClick={handleClick} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.95} speed={1.8}>
          <div style={{display: "flex", flexWrap: 'wrap', alignContent: 'stretch'}}>
            <div>
            <About />
            <Reviews />
            </div>
              <Services />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ backgroundColor: "orange" }}
          offset={1}
          speed={2}
        >
          <section>
            <div className="curve"></div>
            <Footer offset={1} handleClick={handleClick} />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          {/*<div style={{ position: "fixed", left: "20%", top: "-50%" }}>*/}
            <ContactForm />
          {/*</div>*/}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
