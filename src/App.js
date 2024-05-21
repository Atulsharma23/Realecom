import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Listing from "./pages/Listing";
import Footer from "./component/footer/footer";
import Notfound from "./pages/Notfound";
import Details from "./pages/Details"
import { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProducts();
  }, [])
  const getProducts = async () => {
    try {
      await axios.get('http://localhost:3000/productData').then((response) => {
        setProductData(response.data)
      })
    }
    catch (error) {
      alert(error, "error in getting product")
    }
  }
  return (
    productData.length !== 0 &&
    <div className="App">
      <Router>
        <Header data={productData} />
        <Routes>
          <Route path="/" element={<Home data={productData} />} />
          <Route path="/About" element={<About />} />
          <Route path="/cat/:id" element={<Listing data={productData} single={true} />} />
          <Route path="/cat/:id/:id" element={<Listing data={productData} single={false} />} />
          <Route path="*" element={<Notfound />} />
          <Route path="products/:id" element={<Details data={productData} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
