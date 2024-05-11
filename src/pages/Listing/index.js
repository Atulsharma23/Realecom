import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Sidebar from "../../component/Sidebar";
import Product from "../../component/products";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryIcon from '@mui/icons-material/Category';
import GridViewIcon from '@mui/icons-material/GridView';
const Listing = (props) => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenDropDown1, setisOpenDropDown1] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  var itemsData = [];
  useEffect(() => {
    props.data.length !== 0 && props.data.map((item) => {
      if (props.single === true && item.cat_name) {
        if (item.cat_name.toLowerCase() === id.toLowerCase()) {
          item.items.length !== 0 && item.items.map((item_) => {
            item_.products.length !== 0 && item_.products.map((product) => {
              itemsData.push(product);
              console.log(product, "single category products")
            })
          })
        }
      }
      else {
        item.items && item.items.length !== 0 && item.items.map((item_) => {

          console.log("item_")
          if (item_.cat_name.split(' ').join('-').toLowerCase() === id.toLowerCase()) {
            item_.products.length !== 0 && item_.products.map((product) => {
              itemsData.push(product);
              console.log(product, "double category products")

            })
          }
        })
      }


    })
    const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
    setData(list2);
  }, [id])
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
                    <GridViewIcon />
                    Snack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="listingdata">
            <div className="row">
              <div className="col-md-3 SidebarWrapper">
                {
                  data.length !== 0 && <Sidebar data={props.data} currentCatData={data} />
                }

              </div>
              <div className="col-md-9 rightContent home-products pt-0">


                <div className="top-strip d-flex align-items-center">
                  <p className="mb-0">We found <span className="text-success">{data.length}</span> items for you!</p>
                  <div className="ml-auto d-flex align-items-center">
                    <div className="tab_ position-relative">

                      <Button variant="text" className="Short" onClick={() => setisOpenDropDown(!isOpenDropDown)}> <CategoryIcon />show:50</Button>
                      <KeyboardArrowDownIcon />
                      {isOpenDropDown !== false && (
                        <ul className="dropdownMenu">
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown(false)}>
                              {" "}
                              50
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown(false)}>
                              {" "}
                              100
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown(false)}>
                              {" "}
                              150
                            </Button>
                          </li>{" "}
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown(false)}>
                              {" "}
                              200
                            </Button>
                          </li>{" "}
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown(false)}>
                              {" "}
                              All
                            </Button>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="tab_1 ml-5 position-relative">

                      <Button variant="text" className="Short"
                        onClick={() => setisOpenDropDown1(!isOpenDropDown1)}> <GridViewIcon />Short By Featured</Button>
                      <KeyboardArrowDownIcon />
                      {isOpenDropDown1 !== false && (

                        <ul className="dropdownMenu">
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown1(false)}>
                              {" "}
                              Featured
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown1(false)}>
                              {" "}
                              Price:Low to High
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown1(false)}>
                              {" "}
                              Price:High to Low

                            </Button>
                          </li>{" "}
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown1(false)}>
                              {" "}
                              Release Date
                            </Button>
                          </li>{" "}
                          <li>
                            <Button className="align-items-center"
                              onClick={() => setisOpenDropDown1(false)}>
                              {" "}
                              Avg:Rating
                            </Button>
                          </li>
                        </ul>
                      )}
                    </div>

                  </div>
                </div>
                <div className="row productRow pl-4 pl-3">
                  {
                    data.length !== 0 && data.map((item, index) => {
                      return (<div className="item" key={index}>
                        <Product tag="best" item={item} />
                      </div>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Listing;
