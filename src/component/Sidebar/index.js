import React , { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Banner1 from '../../assets/images/Banner1.jpg'

import { Link } from "react-router-dom";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = (props) => {
  const [value, setValue] = React.useState([20, 37]);
  const [totalLength, setTotalLength] = useState([]);
  const [allData, setAllData] = useState(props.data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const lengthArr = allData.map((item) => {
      if (item.items && item.items.length > 0) {
        return item.items.reduce((total, item_) => total + item_.products.length, 0);
      } else {
        return 0; // If item.items is undefined or empty, set the length to 0
      }
    });
    const uniqueLengths = Array.from(new Set(lengthArr)); // Remove duplicates
    setTotalLength(uniqueLengths);
  }, [allData]);
  return (
    <div className="sidebar">
      <div className="card border-0 shadow ">
        <h3>Category</h3>
        <div className="catList">


          {props.data && props.data.length !== 0 && props.data.map((item, index) => {
            // Check if item exists and item.cat_name is defined
            if (item && item.cat_name !== undefined) {
              return (
                <Link to={`/cat/${item.cat_name}`}>
                  <div className="catItem d-flex align-items-center" key={index}>
                    <span className="img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                        width={30}
                        alt="img"
                      />
                    </span>
                    <h4 className="mb-0 ml-3 mr-3">{item.cat_name}</h4>
                    <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
                    {totalLength[index]}
                    </span>
                  </div>
                </Link>
              );
            } else {
              return null; // Skip rendering if item or item.cat_name is undefined
            }
          })}
        </div>
      </div>
      <div className="card-two border-0 shadow   ">
        <h3>Fill by price</h3>

        <div className="Range-selector">
          <Box className="range-area" sx={{ width: 300 }}>
            <Slider
              min={0}
              step={1}
              max={1000}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="success"
            />
          </Box>
        </div>

        <div className="d-flex pt-2 pb-2 priceRange">
          <span>
            From:<strong className="text-success">${value[0]}</strong>
          </span>
          <span className="right-area">
            To:<strong className="text-success">${value[1]}</strong>
          </span>
        </div>

        <div className="filters">
          <h5>Color</h5>
          <ul>
            <li>
              {" "}
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Red(56)
            </li>

            <li>
              {" "}
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Green (78)
            </li>

            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Blue(54)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Blue(54)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Blue(54)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Blue(54)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Blue(54)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Blue(54)
            </li>
          </ul>
        </div>
        <div className="filters-two mb-0">
          <h5>Item Condition</h5>
          <ul>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              New (1506)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Refurbished (27)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Used (45)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Used (45)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Used (45)
            </li>
            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Used (45)
            </li>

            <li>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                color="success"
              />
              Used (45)
            </li>
          </ul>
        </div>
        <button className="filter-button"><FilterAltOffIcon />Filters</button>
      </div>
      <img src={Banner1} className="w-100" />


    </div>
  );
};

export default Sidebar;
