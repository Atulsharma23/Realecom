import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Sidebar from "../../component/Sidebar";
const Listing = () => {
  return (
    <section>
      <div className="listingPage">
        <div className="container-fluid">
          <div className="breadcrumb flex-column">
            <h1>Snack</h1>
            <div>
              {" "}
              <ul className=" list list-inline mb-0">
                <li className="list-inline-item first  ">
                  <Link to={""}>
                    <HomeIcon /> Home
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={""}>
                    <KeyboardArrowRightIcon />
                    Shop
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={""}>
                    <KeyboardArrowRightIcon />
                    Snack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="listingdata">
            <div className="row">
              <div className="col-md-3 SidebarWrapper">
                <Sidebar />
              </div>
              <div className="col-md-9"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Listing;
