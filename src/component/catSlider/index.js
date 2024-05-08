import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./index.css";
import { Link } from "react-router-dom";
const CatSlider = (props) => {
  const [allData, setAllData] = useState(props.data);
  const [totalLength, setTotalLength] = useState([]);
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
    slidesToShow: 6, // Change this to 10 to display 10 items at a time
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    fade: false,
    arrows: true,
  };

  useEffect(() => {
    const lengthArr = allData.map((item) => {
      if (item.items && item.items.length > 0) {
        return item.items.reduce((total, item_) => total + item_.products.length, 0);
      } else {
        return 0; // If item.items is undefined or empty, set the length to 0
      }
    });
    const uniqueLengths = Array.from(new Set(lengthArr)); // Remove duplicates
    setTotalLength(uniqueLengths);
  }, [allData]);


  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Feature Categories</h2>
          <Slider {...settings} className="cat_slider_main" id="cat_slider_main">
            {allData.length !== 0 &&
              allData.map((item, index) => (
                item.image && (
                  <div className="item" key={index}>
                    <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                      <div className="info" style={{ background: itemBg[index] }}>
                        <img src={item.image} width="80" alt={item.cat_name} />
                        <h5 className="text-capitalize mt-3">{item.cat_name}</h5>
                        <p >{totalLength[index]}</p>
                      </div>
                    </Link>
                  </div>
                )
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
