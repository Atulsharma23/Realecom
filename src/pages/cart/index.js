import React, { useState, useContext, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import QuantityBox from "../../component/quantityBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import PaidIcon from "@mui/icons-material/Paid";
import { MyContext } from "../../App";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context.isLogin === "true") {
      getCartData("http://localhost:3002/cartItems");
    } else {
      navigate("/");
    }
  }, []); // Run only once when the component mounts

  const getCartData = async (url) => {
    try {
      const response = await axios.get(url);
      setCartItems(response.data);
    } catch (error) {
      console.log(error, "Error hai yr");
    }
  };

  const deleteItem = async (id) => {
    const response = await axios.delete(
      `http://localhost:3002/cartItems/${id}`
    );
    if (response !== null) {
      getCartData("http://localhost:3002/cartItems");
      context.removeItemsFromCart(id);
    }
  };
  const emptyCart = () => {
    let response = null;
    cartItems.length !== 0 &&
      cartItems.map((item) => {
        response = axios.delete(
          `http://localhost:3002/cartItems/${parseInt(item.id)}`
        );
      });
    if (response !== null) {
      getCartData("http://localhost:3002/cartItems");
    }

    context.emptyCart();
  };

  const updateCart = (items) => {
    setCartItems(items);
  };
  // const updateCart = (items) => {
  //   props.updateCart(items);
  // };

  return (
    <>
      <ul className="breadcrumb breadcrumb2 mb-0">
        <li>
          <a href="/">Home/</a>
        </li>
        <li>
          <a className="text-capitalize" href="/cat/groceries">
            shop/
          </a>
        </li>
        <li>
          <a className="text-capitalize" href="/cart">
            cart
          </a>
        </li>
      </ul>
      <div className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Your Cart</h1>
                  <p>There are {cartItems.length} products in your cart</p>
                </div>
                <span
                  className="clear text-g d-flex align-items-center"
                  onClick={emptyCart}
                >
                  <DeleteOutlineIcon />
                  clear cart
                </span>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No items added to cart
                          </td>
                        </tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link to={`/products/${item.id}`}>
                                  <div className="img">
                                    <img
                                      src={item.catImg + "?im=Resize=(100,100)"}
                                      className="w-100"
                                      alt={item.productName}
                                    />
                                  </div>
                                </Link>
                                <div className="info pl-4">
                                  <Link to={`/products/${item.id}`}>
                                    <h4>{item.productName.slice(0, 20)}</h4>
                                  </Link>
                                  <Rating
                                    name="half-rating-read"
                                    value={parseFloat(item.rating)}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-g">
                                Rs. {parseFloat(item.price.split(",").join(""))}
                              </span>
                            </td>
                            <QuantityBox
                              item={item}
                              cartItems={cartItems}
                              index={item.index}
                              updateCart={updateCart}
                            />

                            <td>
                              <span className="text-g">
                                Rs.{" "}
                                {parseFloat(item.price.split(",").join("")) *
                                  parseInt(item.quantity)}
                              </span>
                            </td>

                            <td>
                              <span
                                className="deletecart"
                                onClick={() => deleteItem(item.id)}
                              >
                                <DeleteOutlineIcon />
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-5 pl-5 tell">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0">Sub Total</h5>
                  <h3 className="cart-prize">
                    <span className="text-g">
                      Rs.{" "}
                      {cartItems.length !== 0
                        ? cartItems
                            .map(
                              (item) =>
                                parseInt(item.price.split(",").join("")) *
                                item.quantity
                            )
                            .reduce((total, value) => total + value, 0)
                        : 0}
                    </span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0">Shipping</h5>
                  <h3 className="cart-prize">
                    <span>Free</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0">Estimate for</h5>
                  <h3 className="cart-prize">United Kingdom</h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0">Total</h5>
                  <h3 className="cart-prize">
                    <span className="text-g">
                      {" "}
                      Rs.{" "}
                      {cartItems.length !== 0
                        ? cartItems
                            .map(
                              (item) =>
                                parseInt(item.price.split(",").join("")) *
                                item.quantity
                            )
                            .reduce((total, value) => total + value, 0)
                        : 0}
                    </span>
                  </h3>
                </div>
                <br />
                <Button variant="contained">
                  Proceed to CheckOut
                  <PaidIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
