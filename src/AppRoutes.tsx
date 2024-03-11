// AppRoutes.tsx
import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";

const menuItems = [
  { title: "Services", route: "/services", backgroundColor: "black" },
  { title: "About", route: "/about", backgroundColor: "#266BBC" },
  { title: "Contact", route: "/contact", backgroundColor: "#526F48" },
];

const AppContent = () => {
  const [appBackgroundColor, setAppBackgroundColor] = useState("lightgrey");
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        console.log("location.pathname", location.pathname);
        setAppBackgroundColor("lightgrey");
        break;
      case "/about":
        console.log("location.pathname", location.pathname);
        setAppBackgroundColor("green");
        break;
      case "/contact":
        console.log("location.pathname", location.pathname);
        setAppBackgroundColor("orange");
        break;
      default:
        setAppBackgroundColor("white");
    }
  }, [location]);

  return (
    <>
      <Grid item sx={{ backgroundColor: appBackgroundColor }}>
        <Header menuItems={menuItems} backgroundColor={"transparent"} />{" "}
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ParallaxProvider>
      </Grid>
      <div ref={contactRef}></div>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppRoutes;
