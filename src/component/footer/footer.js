import React from "react";
import "./footer.css";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerBoxes">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon1} />
                </span>
                <div className="info-footer">
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  {" "}
                  <img src={icon2} />
                </span>
                <div className="info-footer">
                  <h4>Free delivery</h4>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  {" "}
                  <img src={icon3} />
                </span>
                <div className="info-footer">
                  <h4>Great daily deal</h4>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  {" "}
                  <img src={icon4} />
                </span>
                <div className="info-footer">
                  <h4>Wide assortment</h4>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  {" "}
                  <img src={icon5} />
                </span>
                <div className="info-footer">
                  <h4>Easy returns</h4>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
