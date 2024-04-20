import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Rating from "@mui/material/Rating";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


const Details = () => {
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
                        <div className='col-md-5 productZoom'>
                            <InnerImageZoom src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg' />

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
