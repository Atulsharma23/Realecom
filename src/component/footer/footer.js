import React from "react";
import "./footer.css";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import appStore from "../../assets/images/app-store.jpg";
import googleStore from "../../assets/images/google-play.jpg";
import paymentMethod from "../../assets/images/payment.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NewsLetter from "../../component/NewsLetter";
import banner9 from "../../assets/images/banner9.png";
const Footer = () => {
  return (
    <>
    <section className="newsLetterSection">
    <div className="container-fluid">
      <div className="box d-flex">
        <div className="info">
          <h2>Stay home & get your daily<br/> needs from our shop</h2>
          <p>Start You'r Daily Shopping with Nest Mart</p>
          <NewsLetter />
        </div>
        <div className="img">
          <img src={banner9} alt="hsu" className="w-100" />
        </div>
      </div>
    </div>
  </section>
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

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 part1">
              <Link to="/">
                <img src={Logo} />
              </Link>
              <br /> <br />
              <p>Awesome grocery store website template</p>
              <br />
              <p>
                <LocationOnIcon />
                <strong>Address: </strong>5171 W Campbell Ave undefined Kent,
                <br />
                Utah 53127 United States
              </p>
              <p>
                <HeadphonesIcon />
                <strong>Call Us:</strong>(+91) - 540-025-124553
              </p>
              <p>
                <EmailIcon />
                <strong> Email:</strong>sale@Nest.com
              </p>
              <p>
                <AccessTimeIcon />
                <strong> Hours:</strong>10:00 - 18:00, Mon - Sat
              </p>
            </div>
            <div className="col-md-6 part2">
              <div className="row">
                <div className="col">
                  <h3>Company</h3>
                  <ul className="footer-list mb-sm-5 md-md-0"></ul>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Delivery Information</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Support Center</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </div>
                <div className="col">
                  <h3>Account</h3>
                  <ul className="footer-list mb-sm-5 md-md-0"></ul>
                  <li>
                    <Link to="#">Sign In</Link>
                  </li>
                  <li>
                    <Link to="#">View Cart</Link>
                  </li>
                  <li>
                    <Link to="#">My Wishlist</Link>
                  </li>
                  <li>
                    <Link to="#">Track My Order</Link>
                  </li>
                  <li>
                    <Link to="#">Help Ticket</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping Details</Link>
                  </li>
                  <li>
                    <Link to="#">Compare products</Link>
                  </li>
                </div>
                <div className="col">
                  <h3>Corporate</h3>
                  <ul className="footer-list mb-sm-5 md-md-0"></ul>
                  <li>
                    <Link to="#">Become a Vendor</Link>
                  </li>
                  <li>
                    <Link to="#">Affiliate Program</Link>
                  </li>
                  <li>
                    <Link to="#">Farm Bussiness</Link>
                  </li>
                  <li>
                    <Link to="#">Farm Carrers</Link>
                  </li>
                  <li>
                    <Link to="#">Our Supliers</Link>
                  </li>
                  <li>
                    <Link to="#">Accessibility</Link>
                  </li>
                  <li>
                    <Link to="#">Promotions</Link>
                  </li>
                </div>
                <div className="col">
                  <h3>Popular</h3>
                  <ul className="footer-list mb-sm-5 md-md-0"></ul>
                  <li>
                    <Link to="#">Milk & Flavoured Milk</Link>
                  </li>
                  <li>
                    <Link to="#">Butter and Margarine</Link>
                  </li>
                  <li>
                    <Link to="#">Eggs Substitutes</Link>
                  </li>
                  <li>
                    <Link to="#">Marmalades</Link>
                  </li>
                  <li>
                    <Link to="#">Sour Cream and Dips</Link>
                  </li>
                  <li>
                    <Link to="#">Tea & Kombucha</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-3 part3">
              <h3>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Install
                  App
                </strong>
              </h3>
              <br />
              <p>&nbsp;&nbsp;&nbsp;From App Store or Google Play</p>
              <div className="d-flex">
                <Link to="" className="store-link">
                  <img src={appStore} />
                </Link>
                <Link to="" className="store-link">
                  <img src={googleStore} />
                </Link>
              </div>
              <br />
              <p>&nbsp;&nbsp; &nbsp;&nbsp; Secured Payment Gateways</p>

              <img className="payment" src={paymentMethod} />
            </div>
            <br />
            <br />

            <hr className="mt-3" />

            <div className="row lastStrip">
              <div className="col-md-3 ">
                <p>
                  © 2022, <strong style={{ color: "#3BB77E" }}>Nest</strong> -
                  HTML Ecommerce Template All rights reserved
                </p>
              </div>
              <div className="col-md-6 d-flex">
                <div className="m-auto  part3 d-flex align-items-center">
                  <div className="phNo d-flex align-items-center mx-5">
                    <span>
                      <PhoneInTalkIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">1900 - 888</h3>
                      <p className="mb-0">Working 8:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="part3 d-flex align-items-center ">
                    <div className="phNo d-flex align-items-center  mx-5 ">
                      <span>
                        <PhoneInTalkIcon />
                      </span>
                      <div className="info ml-3">
                        <h3 className="text-g mb-0">1900-9666</h3>
                        <p className="mb-0">24/7 Support Center</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3">
                <div className="d-flex align-items-center">
                  <h5>
                    {" "}
                    <strong>Follow Us</strong>
                  </h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={""}>
                        {" "}
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>

                    <li className="list-inline-item">
                      <Link to={""}>
                        <YouTubeIcon />
                      </Link>
                    </li>

                    <li className="list-inline-item">
                      <Link to={""}>
                        <CameraAltIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};
export default Footer;
