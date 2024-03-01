// AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Extra from "./pages/Extra";
import Header from "./components/Header";
import Footer from "./components/Footer";

const menuItems = [
  { title: "Home", route: "/", backgroundColor: "orange" },
  { title: "About", route: "/about", backgroundColor: "pink" },
  { title: "Contact", route: "/contact", backgroundColor: "hotpink" },
];

const AppRoutes = () => {
  return (
    <Router>
      <Header menuItems={menuItems} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Extra />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
