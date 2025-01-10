import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCarousel from "./components/ProductCarousel";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { products } from "./products_data/products";
import Footer from "./components/footer";
import { CartProvider } from "./cartContext";
import CartPage from "./components/CartPage";
import Header from "./components/header";
import IntroPage from "./components/IntroPage";


function App() {
  const [searchValue, setSearchValue] = useState("");
  

  return (
    <CartProvider>
      <Router>
        <div id="main-div" className="min-h-screen bg-gray-50">
        

          <div className="bg-gray-700 w-full px-0">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <IntroPage/>

            <div id="products-section" className="relative bg-gray-50 py-10">
              <Routes>
                <Route
                  path="/"
                  element={<ProductCarousel products={products} />}
                />
                <Route
                  path="/product/:id"
                  element={<ProductDetail products={products} />}
                />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </div>

            <div id="about-section" className="relative bg-gray-200 py-10">
              <AboutUs />
            </div>

            <div id="contact-section" className="relative bg-gray-50 py-10">
              <ContactUs />
            </div>

            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
