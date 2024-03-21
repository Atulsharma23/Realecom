import React, { useEffect, useState} from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Nav from "./nav/nav";
import Select from "../selectDrop/select";
import axios from "axios";
const Header = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [categories, setCategories] = useState([
    "Wines and Drinks",
    "Clothing",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
    "Milks and Diaries",
  ]);

  const countriesList = [];
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          {
            res.data.data.map((item, i) => {
              countriesList.push(item.country);
            });
          }
        }
      });
    } catch (error) {
      console.log("error in get data");
    }
  };

 

  return (
    <>
      <div className="headerWrapper">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img src={Logo} alt="logo" />
              </div>
              <div className="col-sm-5">
                <div className="headersearch d-flex align-items-center">
                  <div>
                    <Select
                      data={categories}
                      placeholder={"All Categories"}
                      icon={false}
                    />
                  </div>

                  <div className="search">
                    <input type="text" placeholder="search for items..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              <div className="col-sm-5 d-flex align-items-center">
                <div className="ml-auto d-flex align-items-center">
                  <div className="second-dropdown">
                    <Select
                      data={countriesList}
                      placeholder={"Your Location"}
                      icon={<FmdGoodIcon />}
                    />
                  </div>
                  <ClickAwayListener
                    onClickAway={() => setisOpenDropDown(false)}
                  >
                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-item">
                        <span>
                          {" "}
                          <img src={IconCompare} alt="test" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          compare
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          {" "}
                          <img src={IconHeart} alt="test" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Wishlist
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          {" "}
                          <img src={IconCart} alt="test" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Cart
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span
                          onClick={() => setisOpenDropDown(!isOpenDropDown)}
                        >
                          {" "}
                          <img src={IconUser} alt="test" />
                          Account
                        </span>

                        {isOpenDropDown !== false && (
                          <ul className="dropdownMenu">
                            <li>
                              <Button className="align-items-center">
                                {" "}
                                <PersonIcon />
                                My Account
                              </Button>
                            </li>
                            <li>
                              <Button className="align-items-center">
                                {" "}
                                <PlaceIcon />
                                Order Tracking
                              </Button>
                            </li>
                            <li>
                              <Button className="align-items-center">
                                {" "}
                                <FavoriteBorderIcon />
                                My Wishlist
                              </Button>
                            </li>{" "}
                            <li>
                              <Button className="align-items-center">
                                {" "}
                                <SettingsIcon />
                                Setting
                              </Button>
                            </li>{" "}
                            <li>
                              <Button className="align-items-center">
                                {" "}
                                <LogoutIcon />
                                Sign out
                              </Button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>
    </>
  );
};
export default Header;
