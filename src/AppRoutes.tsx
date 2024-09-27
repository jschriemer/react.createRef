import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import Backgo from "./assets/backgo.svg";
import Footer from "./components/Footer";
import Accessibility from "./pages/Accessibility";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/termsOfService";
import { useEffect } from "react";
import ScrollToTop from "./utils/ScrollToTop";

const menuItems = [
  { title: "Home", route: "/top", backgroundColor: "#F15A23" },
  { title: "Services", route: "/#services", backgroundColor: "black" },
  { title: "About", route: "/#about", backgroundColor: "#266BBC" },
  { title: "Contact", route: "/#contact", backgroundColor: "#526F48" },
];

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to the section if there's a hash in the URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleMenuItemClick = (route: string) => {
    const isOnHomePage = location.pathname === "/";
    //navigate(`/#${route}`);
    const sectionId = route.slice(1);

    if (route === "/top") {
      if (isOnHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(`${route}`, { state: { scrollToId: sectionId } });
      }
    } else {
      //const elementId = route.slice(1);
      if (isOnHomePage) {
        navigate(`${route}`, { state: { scrollToId: sectionId } });
      } else {
        navigate(`${route}`, { state: { scrollToId: sectionId } });
      }
    }
  };

  return (
    <>
      <Grid
        item
        sx={{
          /* backgroundColor: "lightgrey" */ background: `linear-gradient(rgba(255,255,255,.0), rgba(0,0,0,.7)), url(${Backgo})`,
        }}
      >
        <ScrollToTop />
        <Header
          menuItems={menuItems}
          backgroundColor={"transparent"}
          onItemClick={handleMenuItemClick}
        />
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/termsOfService" element={<TermsOfService />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ParallaxProvider>
        <Footer onItemClick={handleMenuItemClick} />
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
