import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Rating from "@mui/material/Rating";
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from "react-slick";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
const Details = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: true,
        centerMode: true,
    };
    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        autoplay: true,
        centerMode: true,
    };

    const [src, setSrc] =
        useState("https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg");


    const [activeSize, setActiveSize] = useState(0);
    const [inputValue, setinputValue] = useState(1);

    const handleThumbnailClick = (newSrc) => {
        setSrc(newSrc);
        console.log("New Src 1:", newSrc);
        console.log("Src 1:", src);
    };


    const isActive = (index) => {
        setActiveSize(index);
    }

    const plus = () => {
        setinputValue(inputValue + 1);
    }
    const minus = () => {
        if (inputValue !== 1) {
            setinputValue(inputValue - 1);


        }
    }
    return (
        <section className='ProductDetails'>
            <div className="breadcrumbwrapper">
                <div className="container-fluid">
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li className="breadcrumb-item"><Link to="/"><HomeIcon />Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/">Vegetables & Tubers</Link></li>
                        <li className="breadcrumb-item"><Link to="/">Seeds of Change Organic</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container detailsContainer">
                <div className="row ">
                    <div className='col-md-9 part1 d-flex'>
                        <div className='col-md-5'>


                            <div className="productZoom">
                                <Slider {...settings2} className="ZoomSlider">

                                    <div className="ImageZoom">
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={src} />
                                    </div>
                                    <div className="ImageZoom">
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={src} />
                                    </div>
                                    <div className="ImageZoom">
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={src} />
                                    </div>
                                    <div className="ImageZoom">
                                        <InnerImageZoom zoomType="hover" zoomScale={2} src={src} />
                                    </div>
                                </Slider>


                            </div>
                            <Slider {...settings} className="ZoomSlider">
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg'
                                        alt="cppa"
                                        className='w-100'

                                        onClick={() => handleThumbnailClick('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg')}
                                    />
                                </div>
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg'
                                        alt="cppa"
                                        className='w-100'
                                        onClick={() =>
                                            handleThumbnailClick('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg')
                                        } />
                                </div>
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg'
                                        alt="cppa"
                                        className='w-100'
                                        onClick={() =>
                                            handleThumbnailClick('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg')
                                        } />
                                </div>
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg'
                                        alt="cppa"
                                        className='w-100'
                                        onClick={() =>
                                            handleThumbnailClick('https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg')
                                        } />
                                </div>
                            </Slider>
                        </div>
                        <div className='col-md-7 productInfo'>
                            <h1>Seeds of Change <br />Organic Quinoa, Brown</h1>
                            <div className='d-flex align-items-center mb-4'>
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                /> (32 reviews)
                            </div>
                            <div className="priceSec d-flex align-items-center mb-4">
                                <span className="text-g priceLarge">$39</span>
                                <div className='ml-2 d-flex flex-column'>
                                    <span className='text-org'>26% off</span>
                                    <span className='oldp'>$56</span>
                                </div>
                            </div>
                            <p className='priceSec-details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                            <div className='ProductSize d-flex align-items-center'>
                                <span>Size / Weight:</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`}
                                            onClick={() => isActive(0)}>50g</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`}
                                            onClick={() => isActive(1)}>60g</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`}
                                            onClick={() => isActive(2)}>80g</a>
                                    </li>

                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`}
                                            onClick={() => isActive(3)}>100g</a>
                                    </li>

                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`}
                                            onClick={() => isActive(4)}>120g</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='addCartSection pt-4 pb-4 d-flex align-items-center'>
                                <div className="counterSection">
                                    <input type='number' value={inputValue} />
                                    <span className='arrow plus'
                                        onClick={plus}>
                                        <KeyboardArrowUpIcon
                                        /></span>
                                    <span className='arrow minus'
                                        onClick={minus}><KeyboardArrowDownIcon /></span>

                                </div>
                                <button className='btn-add'><ShoppingCartSharpIcon />Add to cart</button>
                                <button className='btn-add fav'><FavoriteBorderSharpIcon /></button>
                                <button className='btn-add compare'>  <CompareArrowsSharpIcon /></button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Details;
