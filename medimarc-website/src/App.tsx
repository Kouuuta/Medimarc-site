import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import LoadingScreen from "./components/LoadingScreen";

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
    }, 500); // match fade-out time
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
        <div className="body-web">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/products"
                element={<ProductList onSelectCategory={() => {}} />}
              />
              <Route
                path="/products/:categoryId"
                element={<ProductDetails />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
