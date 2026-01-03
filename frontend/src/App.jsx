import { Routes, Route } from "react-router-dom";

import Navber from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

import HomePage from "./components/pages/Home/HomePage";
import AllProduct from "./components/pages/Product/AllProduct";
import AboutPage from "./components/pages/About/AboutPage";
import Contact from "./components/pages/Contact/Contact";

import LoginPage from "./components/pages/Register/LoginPage";
import RegisterPage from "./components/pages/Register/RegisterPage";
import AuthPage from "./components/pages/Register/AuthPage";
import WishListPage from "./components/pages/WishListPage/WishListPage";
import Traking from "./components/pages/TrakingPage/Traking";
import Blog from "./components/pages/Blog/Blog";

function App() {
  return (
    <>
      <Navber />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/track" element={<Traking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
