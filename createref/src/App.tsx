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
        <ParallaxLayer offset={0.99} speed={1.8}>
          <div style={{ padding: "50px" }}>
            <h1>About</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "1.5em", padding: "2%" }}>
                <div style={{ padding: "30px" }}>
                  My name's Markus, and I've been providing lawn and snow care
                  in the Calgary area since 2017.{" "}
                </div>
                <div style={{ padding: "30px" }}>
                  Kona Care has grown much since those early days, and the
                  number of services offered has too.
                </div>
                <div style={{ padding: "30px" }}>
                  With various lawn care services, including mowing, aeration,
                  and more, Kona Care will have your yard looking show ready!
                </div>

                <div style={{ padding: "30px" }}>
                  When winter rolls around the corner, we provide snow removal
                  services at a flat monthly rate so that your property is
                  accessible and safe.{" "}
                </div>
                <div style={{ padding: "30px" }}>
                  Kona Care is fully licenced and insured, so you can rest
                  assured that your property is in good hands.
                </div>
              </div>
              <Services />
            </div>
            <div
              style={{
                backgroundColor: "#D9D9D9",
                position: "fixed",
                left: "10%",
                width: "80%",
                marginTop: "50px",
              }}
            >
              reviews here
            </div>
            <div
          style={{
            width: "1000px",
            height: "200px",
            position: "absolute",
            right: "-500px",
            background: "#FFA501",
            borderRadius: "50%",
            transform: "rotate(90deg)"
          }}
        />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ backgroundColor: "orange" }}
          offset={1}
          speed={2}
        >
          <section>
            <div className="curve"></div>
            <Footer offset={2} handleClick={handleClick} />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={2}>
          <div style={{ position: "fixed", left: "20%", top: "-50%" }}>
            <ContactForm />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
