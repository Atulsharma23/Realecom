import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import ClickAwayListener from "@mui/material/ClickAwayListener";

const Nav = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  // function dropPage() {
  //     setShowDropdown(!showDropdown);
  //     console.log(showDropdown, "this is state");
  // }
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className="bg-g text-white catTab">
              {" "}
              <GridViewIcon /> &nbsp; Browse All Categories <ExpandMoreIcon />
            </Button>
          </div>
          <div className="col-sm-8 part2 position-static">
            <nav>
              <ul className="list list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link>Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Shop <ExpandMoreIcon />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Vendors</Link>
                  </Button>

                  <div className="dropdow">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Forgot Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Term Of services</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item position-static">
                  <Button>
                    <Link>
                      Mega menu <ExpandMoreIcon />
                    </Link>
                  </Button>
                  <div className="dropdow megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h3 className="text-g">Fruit & Vegetable</h3>

                        <ul className="mt-3 mb-0">
                          <li>
                            <Link to="">Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>

                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sproutes</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Products</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h3 className="text-g">Breakfast & Dairy</h3>
                        <ul className="mt-3 mb-0">
                          <li>
                            <Link to="">Milk and Flavoured Milk</Link>
                          </li>
                          <li>
                            <Link to="">Butter and Margarine</Link>
                          </li>

                          <li>
                            <Link to="">Eggs and Substitutes</Link>
                          </li>
                          <li>
                            <Link to="">Marmalades</Link>
                          </li>
                          <li>
                            <Link to="">Sour Cream</Link>
                          </li>
                          <li>
                            <Link to="">Cheese</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col">
                        <h3 className="text-g">Meat & Seafood</h3>
                        <ul className="mt-3 mb-0">
                          <li>
                            <Link to="">Breakfast Sausage</Link>
                          </li>
                          <li>
                            <Link to="">Dinner Sausage</Link>
                          </li>

                          <li>
                            <Link to="">Chicken</Link>
                          </li>
                          <li>
                            <Link to="">Sliced Deli Meat</Link>
                          </li>
                          <li>
                            <Link to="">Wild Caught Fillets</Link>
                          </li>
                          <li>
                            <Link to="">Crab and Shellfish</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                          className="W-100"
                        ></img>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog </Link>{" "}
                  </Button>
                </li>
                {/* <ClickAwayListener onClickAway={() => setShowDropdown(false)}> */}
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages <ExpandMoreIcon />
                    </Link>
                  </Button>
                  {/* {showDropdown && ( */}
                  <div className="dropdow">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Forgot Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Term Of services</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                  {/* )} */}
                </li>
                {/* </ClickAwayListener> */}

                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-1 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center ml-auto">
              <span>
                <HeadsetMicIcon />
              </span>
              <div className="info ml-3">
                <h5 className="text-g mb-0">1900 - 888</h5>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
