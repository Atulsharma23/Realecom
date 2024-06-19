import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const Nav = (props) => {
  const [NavData, SetNavData] = useState([]);
  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {
    SetNavData(props.data);
  }, [props.data]);

  useEffect(() => {
    setIsOpenNav(props.openNav);
  }, [props.openNav]);

  return (
    <>
      {isOpenNav && <div className="navbaroverlay" onClick={props.CloseNav}></div>}
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab">
                <GridViewIcon /> &nbsp; Browse All Categories <ExpandMoreIcon />
              </Button>
            </div>
            <div className="col-sm-8 part2 position-static">
              <nav className={isOpenNav ? 'open' : ''}>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link to="/" onClick={props.CloseNav}>Home</Link>
                    </Button>
                  </li>
                  {NavData.length !== 0 && NavData.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                      <Button onClick={props.CloseNav}>
                        <a href={`/cat/${item.cat_name}`} onClick={() => sessionStorage.setItem('cat', item.cat_name.toLowerCase())}>
                          {item.cat_name}
                        </a>
                      </Button>
                      {item.items && item.items.length !== 0 && (
                        <div className="dropdow">
                          <ul>
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Button onClick={props.CloseNav}>
                                  {subItem.cat_name !== null ? (
                                    <a
                                      href={`/cat/${item.cat_name.toLowerCase()}/${subItem.cat_name.toLowerCase().replace(/\s/g, '-')}`}
                                      onClick={() => sessionStorage.setItem('cat', subItem.cat_name.toLowerCase())}
                                    >
                                      {subItem.cat_name}
                                    </a>
                                  ) : null}
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                  <li className="list-inline-item">
                    <Button>
                      <Link>Vendors</Link>
                    </Button>
                    <div className="dropdow">
                      <ul>
                        <li>
                          <Button onClick={props.CloseNav}>
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
                        {props.data.length !== 0 && props.data.map((item, index) => (
                          <div className="col" key={index}>
                            <a href={`/cat/${item.cat_name}`}>
                              <h3 className="text-g">{item.cat_name}</h3>
                            </a>
                            <ul className="mt-3 mb-0">
                              {item.items && item.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a href={`/cat/${item.cat_name.toLowerCase()}/${subItem.cat_name.replace(/\s/g, '-').toLowerCase()}`}>
                                    {subItem.cat_name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="col">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                            className="W-100"
                            alt="Menu Banner"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Blog</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        Pages <ExpandMoreIcon />
                      </Link>
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
    </>
  );
};

export default Nav;
