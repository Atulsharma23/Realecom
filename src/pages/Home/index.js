import React from "react";
import HomeSlider from "./Slider/index";
import CatSlider from "../../component/catSlider";
import Banners from "../../component/banners";
import "./style.css";
import Product from "../../component/products";
import banner4 from "../../assets/images/banner4.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 1000,
    centerMode: true,
  };
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <Banners />
      <section className="home-products">
        <div className="container-fluid">
          <div className="d-flex align-items-center newww ">
            <h2 className="hd mb-0 mt-0 ">Popular Products</h2>
            <ul className="list list-inline filtertab   mb-0">
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
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="home-products pt-0" h>
        <div className="container-fluid">
          <div className="d-flex align-items-center newww ">
            <h2 className="hd mb-0 mt-0 ">Daily Best Sells</h2>
            <ul className="list list-inline filtertab   mb-0">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New added</a>
              </li>
            </ul>
          </div>
          <br /> <br /> <br />
          <div className="row">
            <div className="col-md-3">
              <img src={banner4} className="hu" />
            </div>

            <div className="col-md-9 tree">
              <Slider {...settings} className="row productRow">
                <div className="item">
                  <Product tag="sale" className="yyyy" />
                </div>
                <div className="item">
                  <Product tag="new" className="yyyy" />
                </div>
                <div className="item">
                  <Product tag="best" className="yyyy" />
                </div>
                <div className="item">
                  <Product tag="hot" className="yyyy" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <br />
      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top-Selling" />{" "}
            </div>
            <div className="col">
              <TopProducts title="Trending Products" />{" "}
            </div>

            <div className="col">
              <TopProducts title="Recently Added" />{" "}
            </div>

            <div className="col">
              <TopProducts title="Top-Rated" />{" "}
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};
export default Home;
