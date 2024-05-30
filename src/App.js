import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Listing from "./pages/Listing";
import Footer from "./component/footer/footer";
import Notfound from "./pages/Notfound";
import Details from "./pages/Details";
import Cart from "./pages/cart";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getProducts();
    getCartData("http://localhost:3001/cartItems");
  }, []);
  const getCartData = async (url) => {
    try {
      const response = await axios.get(url);
      setCartItems(response.data);
    } catch (error) {
      console.log(error, "Error hai yr");
    }
  };
  const getProducts = async () => {
    try {
      await axios.get("http://localhost:3001/productData").then((response) => {
        setProductData(response.data);
      });
    } catch (error) {
      alert(error, "error in getting product");
    }
  };

  const addToCart = async (item) => {
    item.quantity = 1;
    try {
      await axios
        .post("http://localhost:3001/cartItems", item)
        .then((response) => {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        });
    } catch (error) {
      console.log(error, "error in adding item to the cart");
    }
  };

  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr);
  };
  const emptyCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeItemsFromCart,
    emptyCart,
  };
  return (
    productData.length !== 0 && (
      <div className="App">
        <Router>
          <MyContext.Provider value={value}>
            <Header data={productData} />
            <Routes>
              <Route path="/" element={<Home data={productData} />} />
              <Route path="/About" element={<About />} />
              <Route
                path="/cat/:id"
                element={<Listing data={productData} single={true} />}
              />
              <Route
                path="/cat/:id/:id"
                element={<Listing data={productData} single={false} />}
              />
              <Route path="*" element={<Notfound />} />
              <Route
                path="products/:id"
                element={<Details data={productData} />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signIn" element={<SignIn />} />

              <Route path="/signUp" element={<SignUp />} />
            </Routes>
            <Footer />
          </MyContext.Provider>
        </Router>
      </div>
    )
  );
}
export default App;
export { MyContext };
