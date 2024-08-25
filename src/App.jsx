import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CardPizza from "./Components/CardPizza";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";

import Pizza from "./Components/Pizza";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <LoginPage/> */}
      {/* <Cart /> */}
      <Pizza />

      <Footer />
    </>
  );
}

export default App;
