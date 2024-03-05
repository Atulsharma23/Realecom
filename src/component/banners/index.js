import React from "react";
import Banner1 from "../../assets/images/Banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";

import "./style.css";
const Banners = () => {
  return (
    <div className="banner-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={Banner1} alt="banner1" className="W-100 transition" />
             
            </div>
          </div>
          <div className="col">
            <div className="box">
            <img src={Banner2} alt="banner2" className="W-100 transition"/>
             
            </div>
          </div>
          <div className="col">
            <div className="box">
            <img src={Banner3} alt="banner3" className="W-100 transition"/>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banners;

