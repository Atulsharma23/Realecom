import React, { useEffect, useState } from "react";
import HomeSlider from "./Slider/index";
import CatSlider from "../../component/catSlider";
import Banners from "../../component/banners";
import "./style.css";
import Product from "../../component/products";
import banner4 from "../../assets/images/banner4.jpg";
import Slider from "react-slick";
import TopProducts from "./TopProducts";
const Home = (props) => {
  const [productData, setProductData] = useState(props.data);
  const [catArray, setCatArray] = useState([]);
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabData, setactiveTabData] = useState([]);
  const [bestsell, setBestsells] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 1000,
    centerMode: true,
  };

  const [prodCat, setProdCat] = useState({
    parentCat: sessionStorage.getItem('parentCat'),
    subCatName: sessionStorage.getItem('subCatName')

  })

  const catArr = [];
  useEffect(() => {
    productData.length !== 0 && productData.map((item) => {

      item.items && item.items.length !== 0 &&
        item.items.map((item_) => {
          catArr.push(item_.cat_name)
        })
    })
    //catArr have duplicate array in it so here is line of code to remove the duplicate array 
    const list2 = catArr.filter((item, index) =>
      catArr.indexOf(item) === index
    );
    setCatArray(list2);
    setactiveTab(list2[0]);
  }, [])

  useEffect(() => {
    const arr = [];
    setactiveTabData(arr);
    if (productData && productData.length !== 0) {
      productData.forEach((item) => {
        if (item.items && item.items.length !== 0) {
          item.items.forEach((item_) => {
            if (item_.cat_name === activeTab) {
              if (item_.products && item_.products.length !== 0) {
                item_.products.forEach((product) => {
                  arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name });
                });
              }
              setactiveTabData(arr);
            }
          });
        }
      });
    }
  }, [activeTab, productData]);


  const Bestarr = [];
  useEffect(() => {

    productData.length !== 0 &&
      productData.map((item) => {
        console.log(item.cat_name, "item h vewer")
        if (item.cat_name === "Fashion") {
          item.items.length !== 0 &&
            item.items.map((item_) => {

              item_.products.length !== 0 &&
                item_.products.map((product, productIndex) => {
                  Bestarr.push(product);
                })

            })
        }
      })
    setBestsells(Bestarr);
  }, [])



  return (
    <div style={{display:"none"}}>
      <HomeSlider />
      <CatSlider data={productData} />
      <Banners />
      <section className="home-products">
        <div className="container-fluid">
          <div className="d-flex align-items-center newww ">
            <h2 className="hd mb-0 mt-0 ">Popular Products</h2>
            <ul className="list list-inline filtertab   mb-0">
              {
                catArray.length !== 0 && catArray.map((item, index) => {
                  return (
                    <li className="list-inline-item" key={index}>
                      <a className={`cursor text-capitalize ${activeTabIndex === index ? 'act' : ''}`}


                        onClick={() => {
                          setActiveTabIndex(index)
                          setactiveTab(item)
                        }}>{item}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="row productRow">
            {activeTabData.length !== 0 &&
              activeTabData.slice(0, 8).map((item, index) => {
                const tag = ["new", "hot", "sale", "best"]; // Tags array without repetition

                return (
                  <div className="item" key={index}>
                    <Product tag={tag[index % tag.length]} item={item} /> {/* Use modulo to cycle through tags */}
                  </div>
                );
              })}
          </div>
        </div>
      </section >
      <br />
      <section className="home-products pt-0" h>
        <div className="container-fluid">
          <div className="d-flex align-items-center newww ">
            <h2 className="hd mb-0 mt-0 ">Daily Best Sells</h2>
            <ul className="list list-inline filtertab   mb-0">
              {/* <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New added</a>
              </li> */}
            </ul>
          </div>
          <br /> <br /> <br />
          <div className="row">
            <div className="col-md-3">
              <img src={banner4} className="hu" />
            </div>


            <div className="col-md-9 tree">
              <Slider {...settings} className="row productRow">

                {bestsell.length !== 0 &&
                  bestsell.map((item, index) => {
                    return (
                      <div className="item">
                        <Product tag="hot" item={item} className="yyyy" />
                      </div>
                    )
                  })

                }

                {/* <div className="item">
                  <Product tag="new" className="yyyy" />
                </div>
                <div className="item">
                  <Product tag="best" className="yyyy" />
                </div>
                <div className="item">
                  <Product tag="hot" className="yyyy" />
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
      <br />
      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top-Selling" />{" "}
            </div>
            <div className="col">
              <TopProducts title="Trending Products" />{" "}
            </div>
            <div className="col">
              <TopProducts title="Recently Added" />{" "}
            </div>
            <div className="col">
              <TopProducts title="Top-Rated" />{" "}
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};
export default Home;
