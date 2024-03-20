import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import Backgo from "./assets/backgo.svg";

const menuItems = [
  { title: "Home", route: "/top", backgroundColor: "#F15A23" },
  { title: "Services", route: "/services", backgroundColor: "black" },
  { title: "About", route: "/about", backgroundColor: "#266BBC" },
  { title: "Contact", route: "/contact", backgroundColor: "#526F48" },
];

const AppContent = () => {
  const handleMenuItemClick = (route: string) => {
    const element =
      route === "/top"
        ? document.documentElement
        : document.getElementById(route.slice(1));

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
        <Header
          menuItems={menuItems}
          backgroundColor={"transparent"}
          onItemClick={handleMenuItemClick}
        />
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ParallaxProvider>
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
