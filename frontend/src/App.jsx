import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navber from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import AboutPage from "./components/pages/About/AboutPage";
import Contact from "./components/pages/Contact/Contact";

import RegisterPage from "./components/pages/Register/RegisterPage";
import LoginPage from "./components/pages/Register/LoginPage";
import AuthPage from "./components/pages/Register/AuthPage";

function App() {
  return (
    <>
      <Navber />
      <AuthPage />
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* <Contact /> */}

      {/* <AboutPage /> */}
      <Footer />
    </>
  );
}

export default App;
