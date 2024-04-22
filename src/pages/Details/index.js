import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Rating from "@mui/material/Rating";
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from "react-slick";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


const Details = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: true, // Set autoplay to true or false
        centerMode: true
    };


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
            <div className="container-fluid">
                <div className="row ">
                    <div className='col-md-9 part1 d-flex'>
                        <div className='col-md-5'>
                            <div className="productZoom">
                                <InnerImageZoom zoomType="hover" src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg' />
                            </div>
                            <Slider {...settings} className="ZoomSlider">
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg' alt="cppa" className='w-100' />
                                </div>
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg' alt="cppa" className='w-100' />
                                </div>
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg' alt="cppa" className='w-100' />
                                </div>
                                <div className="itemnew">
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg' alt="cppa" className='w-100' />
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
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;
