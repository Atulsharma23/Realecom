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
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="*" element={<Notfound />} />
          <Route path="products/Details" element={<Details />} />



        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
