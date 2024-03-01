import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Home from "./pages/Home/index"
import About from "./pages/About/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
