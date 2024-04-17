import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Banner1 from '../../assets/images/Banner1.jpg'




const label = { inputProps: { "aria-label": "Checkbox demo" } };

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sidebar">
      <div className="card border-0 shadow ">
        <h3>Category</h3>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Clothing</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Pet Foods</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              44
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Baking Material</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              23
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Fresh Fruit</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              35
            </span>
          </div>
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
