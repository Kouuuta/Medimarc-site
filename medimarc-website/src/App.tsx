import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { LoadingScreen } from "./components/sections/LoadingScreen";
import { pageTransition } from "./lib/animations";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<ProductDetails />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(() => {
    return !sessionStorage.getItem("hasSeenLoading");
  });

  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadingComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      sessionStorage.setItem("hasSeenLoading", "true");
      setShowLoading(false);
    }, 400);
  };

  return (
    <Router>
      {showLoading && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
          fadeOut={fadeOut}
        />
      )}
      {!showLoading && (
        <div className="flex flex-col min-h-screen overflow-x-clip">
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
