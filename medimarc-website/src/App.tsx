import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

function App() {
  const handleCategorySelection = (category: any) => {
    // Handle category selection here
    console.log("Category selected:", category);
  };

  return (
    <Router>
      <div className="body-web">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductList onSelectCategory={handleCategorySelection} />
              }
            />
            <Route path="/products/:categoryId" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
