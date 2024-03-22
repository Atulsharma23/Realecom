import React, { useState } from "react";
import Slider from "react-slick";

import "./index.css";
const CatSlider = () => {
  const [itemBg, setitemBg] = useState([
    "#ecffec",
    "#f2fce4",
    "#BCE3C9",
    "#ecffec",
    "#feefea",
    "#F4F6FA",
    "#f4f6fa",
    "#feefea",
    "#fffceb",
    "#fffceb",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#f4f6fa",
    "#feefea",
    "#fffceb",
    "#fffceb",
  ]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed to 3 seconds (3000 milliseconds)
    fade: false,
    arrows: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Feature Categories</h2>
          <Slider
            {...settings}
            className="cat_slider_main"
            id="cat_slider_main"
          >
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png"
                        alt="urd"
                      />
                      <h5>Cake & Milk</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}

            {/* <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                <h5>Oganic Kiwi</h5>
                <p>28 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                <h5>Peach</h5>
                <p>44 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h5>Red Apple</h5>
                <p>66 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                <h5>Snack</h5>
                <p>32 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                <h5>Vegetables</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                <h5>Strawberry</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                <h5>Black Pulm</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                <h5>Custurd apple</h5>
                <p>75 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                <h5>Coffee and Tea</h5>
                <p>76 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png" />
                <h5>Headphone</h5>
                <p>87 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                <h5>Oganic Kiwi</h5>
                <p>28 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                <h5>Peach</h5>
                <p>44 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h5>Red Apple</h5>
                <p>66 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                <h5>Snack</h5>
                <p>32 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                <h5>Vegetables</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                <h5>Strawberry</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                <h5>Black Pulm</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                <h5>Custurd apple</h5>
                <p>75 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                <h5>Coffee and Tea</h5>
                <p>76 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png" />
                <h5>Headphone</h5>
                <p>87 items</p>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default CatSlider;
