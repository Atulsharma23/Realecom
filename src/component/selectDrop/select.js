import React, { useState } from "react";
import "../selectDrop/select.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
const Select = (props) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(props.placeholder);
  const [listData, setlistData] = useState(props.data);
  const [listData2, setlistData2] = useState(props.data);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };
  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setisOpenSelect(false);
    setSelectedItem(name);
  };
  const keywordSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });
    const list2 = list.filter((item, index) => list.indexOf(item) === index);
    setlistData(list2);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDropWrapper position-relative">
        {props.icon}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}{" "}
          <ArrowDropDownIcon className="downArrow" />
        </span>
        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchField">
              <input
                type="text"
                placeholder="search here..."
                onChange={keywordSearch}
              />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => {
                  closeSelect(0, props.placeholder);
                }}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {props.placeholder}
              </li>
              {listData.map((item, i) => {
                return (
                  <li
                    key={i + 1}
                    onClick={() => {
                      closeSelect(i + 1, item);
                    }}
                    className={`${selectedIndex === i + 1 ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};
export default Select;
