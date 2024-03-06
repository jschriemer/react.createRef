// AppRoutes.tsx
import { useEffect, useState } from "react";
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
import Footer from "./components/Footer";
import { Grid } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";

const menuItems = [
  { title: "About", route: "/about", backgroundColor: "pink" },
  { title: "Services", route: "/services", backgroundColor: "orange" },
  { title: "Contact", route: "/contact", backgroundColor: "hotpink" },
];

const AppContent = () => {
  const [appBackgroundColor, setAppBackgroundColor] = useState("lightgrey");
  const [footerBackgroundColor, setFooterBackgroundColor] =
    useState("transparent");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        console.log("location.pathname", location.pathname);
        setAppBackgroundColor("lightgrey");
        setFooterBackgroundColor("black");
        break;
      case "/about":
        console.log("location.pathname", location.pathname);
        setAppBackgroundColor("green");
        break;
      case "/contact":
        console.log("location.pathname", location.pathname);
        setAppBackgroundColor("orange");
        setFooterBackgroundColor("black");
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
        <Footer backgroundColor={footerBackgroundColor} />
      </Grid>
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
