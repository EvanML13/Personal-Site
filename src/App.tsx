import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./pages/Portfolio";
import Reflection from "./pages/Reflection";

// Handle Routes When Switching Between Pages
function AnimateRoutes() {
  const location = useLocation()

  // Reset Scroll Position Every Time The Route Changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </AnimatePresence>
  );
}

// Display In App
export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <AnimateRoutes />
    </HashRouter>
  )
}
