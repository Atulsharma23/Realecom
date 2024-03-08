import React from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div className="productthumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      <Link>
        <div className="imageWrapper">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
            className="w-100"
            alt="dd"
          />

          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <a className="cursor" tooltip="Add to Wishlist">
                  <FavoriteBorderIcon />
                </a>
              </li>

              <li className="list-inline-item">
                <a className="cursor" tooltip="Compare">
                  <CompareArrowsIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" tooltip="Quickview">
                  <RemoveRedEyeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Link>

      <div className="info">
        <span className="d-block catName">Snack</span>
        <h4 className="title">
          Seeds of Change Organic Quinaoa,Brown, & Red Rice
        </h4>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <span className="brand d-block text-g">
          By<Link className="text-g"> NestFood</Link>
        </span>
        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold"> $29.44 </span>{" "}
            <span className="oldprice"> $32.33</span>
            <button className="rice">
              <AddShoppingCartIcon /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
