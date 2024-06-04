import React, { useEffect, useState, useContext } from "react";
import "../header/header.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.svg";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaceIcon from "@mui/icons-material/Place";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Nav from "./nav/nav";
import Select from "../selectDrop/select";
import axios from "axios";
import { MyContext } from "../../App";
import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { app } from "../../firebase";

const Header = (props) => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const context = useContext(MyContext);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [categories] = useState([
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

  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      if (res && res.data && res.data.data) {
        const countries = res.data.data.map((item) => item.country);
        setCountriesList(countries);
      }
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  const handleSignOut = () => {
    firebaseSignOut(auth)
      .then(() => {
        context.signOut();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  return (
    <>
      <div className="headerWrapper">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 part1 d-flex align-items-center">
                <Link to="/">
                  {" "}
                  <img src={Logo} alt="logo" />
                </Link>
                <div className="menutoggle Location  mr-2">
                <AddLocationIcon />
                </div>
                <div className="menutoggle search mr-2">
                <SearchIcon />
                </div>

                <div className="menutoggle ml-auto">

                  <MenuIcon />
                </div>
              </div>
              <div className="col-sm-5 part2">
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
              <div className="col-sm-5 d-flex align-items-center part3">
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
                          <img src={IconCompare} alt="compare" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          compare
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <img src={IconHeart} alt="wishlist" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Wishlist
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <img src={IconCart} alt="cart" />
                          <span className="badge bg-success rounded-circle">
                            {context.cartItems?.length || 0}
                          </span>
                          <Link
                            to="/cart"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Cart
                          </Link>
                        </span>
                      </li>
                      {context.isLogin === "true" ? (
                        <li className="list-inline-item">
                          <span
                            onClick={() => setisOpenDropDown(!isOpenDropDown)}
                          >
                            <img src={IconUser} alt="account" />
                            Account
                          </span>
                          {isOpenDropDown && (
                            <ul className="dropdownMenu">
                              <li>
                                <Button className="align-items-center">
                                  <PersonIcon />
                                  My Account
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center">
                                  <PlaceIcon />
                                  Order Tracking
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center">
                                  <FavoriteBorderIcon />
                                  My Wishlist
                                </Button>
                              </li>
                              <li>
                                <Button className="align-items-center">
                                  <SettingsIcon />
                                  Setting
                                </Button>
                              </li>
                              <li>
                                <Button
                                  className="align-items-center"
                                  onClick={handleSignOut}
                                >
                                  <LogoutIcon />
                                  Sign out
                                </Button>
                              </li>
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li className="list-inline-item">
                          <Link to="/SignIn">
                            <button className="filter-button">Sign In</button>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Nav data={props.data} />
      </div>
    </>
  );
};

export default Header;
