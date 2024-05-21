import React, { useEffect, useState } from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";
const Product = (props) => {
  const [productData, setProductData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setProductData(props.item);
  })
  const setProductCat = () => {
    sessionStorage.setItem('parentCat', productData.parentCatName)
    sessionStorage.setItem('subCatName', productData.subCatName)

  }




  return (
    <div className="productthumb" onClick={setProductCat}>
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      {

        productData !== undefined && <>
          <Link to={`/products/${productData.id}`}>
            <div className="imageWrapper" >
              <duv className="p-4 wrapper">
                <img
                  src={productData.catImg + '?im=Resize=(420,420)'}
                  className="w-100"
                  alt="dd"
                />
              </duv>

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

            <span className="d-block catName">{productData.brand}</span>
            <h4 className="title">

              {productData.productName.slice(0, 20)}
            </h4>
            <Rating
              name="half-rating-read"
              value={productData.rating}
              readOnly
            />
            <span className="brand d-block text-p">
              By<Link className="text-p">
                NestFood</Link>
            </span>
            <div className="d-flex align-items-center mt-3">

              <div className="d-flex align-items-center">

                <div className="adjustment">
                  <span className="price text-p font-weight-bold"> ${productData.price}</span>{" "}

                  <span className="oldprice"
                    style={{ color: 'red' }}> ${productData.oldPrice}</span>
                  <button className="rice">
                    <AddShoppingCartIcon /> Add
                  </button> </div>


              </div>
            </div>
          </div>
        </>
      }






    </div >
  );
};
export default Product;
