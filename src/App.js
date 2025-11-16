import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Products from './Routes/Products';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Cart from './Routes/Cart';
import Footer from './components/Footer';
import ProductDetail from './components/Productdetail';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import Checkout from './Routes/Checkout';

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    document.title = "Noctype E-Commerce ";
  }, []);

  return (
    <BrowserRouter basename="/Noctype-E-Commerce">
      <ProductsProvider>
        <CartProvider>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />

        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
