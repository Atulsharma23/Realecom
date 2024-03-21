import React from "react";
import Slider from "react-slick";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./index.css";
import slider1 from "../../../assets/images/slider1.png";
import slider2 from "../../../assets/images/slider2.png";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay:1000,
    centerMode:true

  };
  return (
    <section className="homeSlider">
      <div className="containder-fluid">
        <Slider {...settings} className="home_slider_main">
          <div className="item">
            <img src={slider1} alt="slider" className="w-100" />
            <div className="Info">
              <h2 className="mb-4">
                Don't miss amazing
                <br />
                grocery deals
              </h2>
              <p>Sign up for daily newsletter</p>
            </div>
          </div>{" "}
          <div className="item">
            <img src={slider2} alt="slider" className="w-100" />
            <div className="Info">
              <h2 className="mb-3">
                Fresh Vegetables <br />
                Big discount{" "}
              </h2>
              <p>Save upto 50% off on first order</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="newsLetterBanner">
        <SendOutlinedIcon />{" "}
        <input type="text" placeholder="Your Email Address" />
        <Button className="bg-g">Subscribe</Button>
      </div>
    </section>
  );
};
export default HomeSlider;
