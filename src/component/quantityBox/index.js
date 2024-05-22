import React ,{useState}from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./index.css";
const QuantityBox = () => {
  const [inputValue, setInputValue] = useState(1);
  const plus = () => {
    setInputValue((prev) => prev + 1);
  };

  const minus = () => {
    setInputValue((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="counterSection2 mt-4">
      <input type="number" value={inputValue} readOnly />
      <span className="arrow plus" onClick={plus}>
        <KeyboardArrowUpIcon />
      </span>
      <span className="arrow minus" onClick={minus}>
        <KeyboardArrowDownIcon />
      </span>
    </div>
  );
};
export default QuantityBox;
