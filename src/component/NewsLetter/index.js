import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Button from "@mui/material/Button";
import "./style.css";
const NewsLetter = () => {
  return (
    <div className="newsLetterBanner">
      <SendOutlinedIcon />{" "}
      <input type="text" placeholder="Your Email Address" />
      <Button className="bg-g">Subscribe</Button>
    </div>
  );
};
export default NewsLetter;
