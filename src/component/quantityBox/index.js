import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./index.css";

const QuantityBox = (props) => {
  const [inputValue, setInputValue] = useState(props.item.quantity);

  const handleQuantityChange = (newQuantity) => {
    const updatedCartItems = props.cartItems.map((item) => {
      if (item.id === props.item.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    props.updateCart(updatedCartItems);
  };

  return (
    <div className="counterSection2 mt-4">
      <input type="number" value={inputValue} readOnly />
      <span
        className="arrow plus"
        onClick={() => {
          const newQuantity = inputValue + 1;
          setInputValue(newQuantity);
          handleQuantityChange(newQuantity);
        }}
      >
        <KeyboardArrowUpIcon />
      </span>
      <span
        className="arrow minus"
        onClick={() => {
          const newQuantity = inputValue - 1 > 0 ? inputValue - 1 : 0;
          setInputValue(newQuantity);
          handleQuantityChange(newQuantity);
        }}
      >
        <KeyboardArrowDownIcon />
      </span>
    </div>
  );
};
export default QuantityBox;
