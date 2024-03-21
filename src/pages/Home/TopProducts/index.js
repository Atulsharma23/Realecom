import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import img1 from "../../../assets/images/img1.jpg";
const TopProducts = (props) => {
  return (
    <div className="topselling_box">
      <h3>{props.title}</h3>
      <div className="items d-flex align-items-center">
        <div className="img">
          <Link to="">
            <img src={img1} alt="imghs" className="w-100" />
          </Link>
        </div>
        <div className="info">
          <Link to="">
            {" "}
            <h4>Foster Farms Takeout Crispy Classic Buffalo Wings</h4>
          </Link>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold"> $29.44 </span>{" "}
            <span className="oldprice"> $32.33</span>
            <button className="rice">
              <AddShoppingCartIcon /> Add
            </button>
          </div>
        </div>
      </div>
      

      <div className="items d-flex align-items-center">
        <div className="img">
          <Link to="">
            <img src={img1} alt="imghs" className="w-100" />
          </Link>
        </div>
        <div className="info">
          <Link to="">
            {" "}
            <h4>Foster Farms Takeout Crispy Classic Buffalo Wings</h4>
          </Link>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold"> $29.44 </span>{" "}
            <span className="oldprice"> $32.33</span>
            <button className="rice">
              <AddShoppingCartIcon /> Add
            </button>
          </div>
        </div>
      </div>

      <div className="items d-flex align-items-center">
        <div className="img">
          <Link to="">
            <img src={img1} alt="imghs" className="w-100" />
          </Link>
        </div>
        <div className="info">
          <Link to="">
            {" "}
            <h4>Foster Farms Takeout Crispy Classic Buffalo Wings</h4>
          </Link>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
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
export default TopProducts;
