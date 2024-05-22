import React, { useState } from "react";
import "./index.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Cart = () => {
  const [inputValue, setInputValue] = useState(1);
  const plus = () => {
    setInputValue((prev) => prev + 1);
  };

  const minus = () => {
    setInputValue((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <>
      <ul className="breadcrumb breadcrumb2 mb-0">
        <li>
          <a href="/">Home/</a>{" "}
        </li>
        <li>
          <a className="text-capitalize" href="/cat/groceries">
            shop/
          </a>{" "}
        </li>
        <li>
          <a className="text-capitalize" href="/cart">
            cart
          </a>{" "}
        </li>
      </ul>
      <div className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Your Cart</h1>
                  <p>There are 3 products in your cart</p>
                </div>
                <span className="clear text-g d-flex align-items-center">
                  <DeleteOutlineIcon />
                  clear cart
                </span>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product </th>
                        <th>Unit Price </th>
                        <th>Quantity </th>
                        <th>SubTotal </th>
                        <th>Remove </th>
                      </tr>
                    </thead>

                    <tbody >
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg?im=Resize=(420,420)"
                                className="w-100"
                              />
                            </div>
                            <div className="info pl-4">
                              <Link>
                                <h4>field roast 50g peanut butter</h4>{" "}
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={5}
                                readOnly
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          {" "}
                          <span className="text-g">$2.51</span>
                        </td>
                        <div className="counterSection2 mt-4">
                          <input type="number" value={inputValue} readOnly />
                          <span className="arrow plus" onClick={plus}>
                            <KeyboardArrowUpIcon />
                          </span>
                          <span className="arrow minus" onClick={minus}>
                            <KeyboardArrowDownIcon />
                          </span>
                        </div>

                        <td>
                          <span className="text-g">$2.51</span>
                        </td>

                        <td>
                          <DeleteOutlineIcon />
                        </td>
                      </tr>
                    </tbody>
                    
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg?im=Resize=(420,420)"
                                className="w-100"
                              />
                            </div>
                            <div className="info pl-4">
                              <Link>
                                <h4>field roast 50g peanut butter</h4>{" "}
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={5}
                                readOnly
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          {" "}
                          <span className="text-g">$2.51</span>
                        </td>
                        <div className="counterSection2 mt-4">
                          <input type="number" value={inputValue} readOnly />
                          <span className="arrow plus" onClick={plus}>
                            <KeyboardArrowUpIcon />
                          </span>
                          <span className="arrow minus" onClick={minus}>
                            <KeyboardArrowDownIcon />
                          </span>
                        </div>

                        <td>
                          <span className="text-g">$2.51</span>
                        </td>

                        <td>
                          <DeleteOutlineIcon />
                        </td>
                      </tr>
                    </tbody>
                    
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://www.jiomart.com/images/product/original/491432711/moong-dal-2-kg-product-images-o491432711-p491432711-0-202205191636.jpg?im=Resize=(420,420)"
                                className="w-100"
                              />
                            </div>
                            <div className="info pl-4">
                              <Link>
                                <h4>field roast 50g peanut butter</h4>{" "}
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={5}
                                readOnly
                              />
                            </div>
                          </div>
                        </td>

                        <td>
                          {" "}
                          <span className="text-g">$2.51</span>
                        </td>
                        <div className="counterSection2 mt-4">
                          <input type="number" value={inputValue} readOnly />
                          <span className="arrow plus" onClick={plus}>
                            <KeyboardArrowUpIcon />
                          </span>
                          <span className="arrow minus" onClick={minus}>
                            <KeyboardArrowDownIcon />
                          </span>
                        </div>

                        <td>
                          <span className="text-g">$2.51</span>
                        </td>

                        <td>
                          <DeleteOutlineIcon />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>
            <div className="col-md-5 pl-5 tell">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 ">Sub Total</h5>
                  <h3 className="cart-prize">
                    {" "}
                    <span className="text-g">$2.51</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 ">Shipping</h5>
                  <h3 className="cart-prize">
                    {" "}
                    <span >Free</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 ">Estimate for</h5>
                  <h3 className="cart-prize"> United Kingdom</h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 ">Total</h5>
                  <h3 className="cart-prize">
                    {" "}
                    <span className="text-g">$2.51</span>
                  </h3>
                </div>
                <br/>
                <Button variant="contained">Proceed to CheckOut<PaidIcon/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
