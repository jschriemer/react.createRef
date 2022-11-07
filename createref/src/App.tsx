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
        style={{ top: "0", left: "0", background: "beige" }}
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
              <div style={{ fontSize: "1.5em", padding: '2%' }}>
                <p>
                  Hey there! My name's Markus, and I've been providing lawn and
                  snow care in the Calgary area since 2017. Kona Care has grown
                  much since those early days, and the number of services
                  offered has too. With various lawn care services, including
                  mowing, aeration, and more, Kona Care will have your yard
                  looking show ready!
                </p>
                <p>
                  When winter rolls around the corner, we provide snow removal
                  services at a flat monthly rate so that your property is
                  accessible and safe. Kona Care is fully licenced and insured,
                  so you can rest assured that your property is in good hands.
                </p>
                <p>
                  Outside of my landscaping and snow removal company, I'm
                  studying business administration at college and hitting the
                  golf course to work on my long game!
                </p>
              </div>
              <img
                src={require("./images/puppy.png")}
                style={{ width: "100%", height: "auto", maxWidth: "35vw" }}
              />
            </div>
          </div>
          <Services />
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
        <ParallaxLayer offset={1.2} speed={5} horizontal={true}>
          <div style={{ position: "absolute", bottom: 500, left: -1900 }}>
            <ContactForm />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
