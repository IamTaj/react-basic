import "./App.css";
import NavBar from "./Pages/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Address from "./Pages/Address";
import Footer from "./Pages/Footer";
import Singlepage from "./Pages/Singlepage";
import Viewcart from "./Pages/Viewcart";
import { useState, useEffect } from "react";
import CardDetails from "./Pages/CardDetails";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (items) => {
    setCart([...cart, items]);
    console.log("Cart updated", cart);
  };

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(cart));
    console.log(localStorage.setItem("dataKey", JSON.stringify(cart)));
  }, [cart]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Address" element={<Address />}></Route>
          <Route path="/CardDetails" element={<CardDetails />}></Route>
          <Route
            path="/Singlepage"
            element={<Singlepage addToCart={addToCart} items={cart} />}
          ></Route>
          <Route
            exact
            path="/Viewcart"
            element={<Viewcart items={cart} />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
