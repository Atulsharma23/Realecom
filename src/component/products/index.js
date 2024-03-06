import React from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = () => {
  return (
    <div className="productthumb">
      <div className="imageWrapper">
        <img
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
          className="w-100"
          alt="dd"
        />
      </div>
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
        <span className="brand d-block">
          By<a className="text-g">NestFood</a>
        </span>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span className="price"> $29.44</span>{" "}
            <span className="oldprice">$32.33</span>
            <button className="rice"><AddShoppingCartIcon/> Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
