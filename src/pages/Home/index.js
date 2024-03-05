import React from "react";
import HomeSlider from "./Slider/index";
import CatSlider from "../../component/catSlider";
import Banners from "../../component/banners";
import "./style.css";
import Product from "../../component/products";
const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <Banners />
      <section className="home-products">
        <div className="container-fluid">
          <div className="d-flex align-items-center newww ">
            <h2 className="hd mb-0 mt-0 ">Popular Products</h2>
            <ul className="list list-inline filtertab">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Milk and Diaries</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Coffes and Teas</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Vegetables</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
            </ul>
          </div>

          <div className="row productRow">
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
