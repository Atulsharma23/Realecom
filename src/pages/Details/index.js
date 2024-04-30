import React, { useState, useRef } from 'react';
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
    const settings = {
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
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
    };

    const zoomSliderBigRef = useRef(null);

    const [activeSize, setActiveSize] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [zoomedSrc, setZoomedSrc] = useState("https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg");
    const [activeTabs, setActiveTabs] = useState(0);

    const handleThumbnailClick = (index) => {
        setZoomedSrc(`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-${index}.jpg`);
        zoomSliderBigRef.current.slickGoTo(index);
        console.log(zoomedSrc)
    };

    const isActive = (index) => {
        setActiveSize(index);
    }

    const plus = () => {
        setInputValue(prev => prev + 1);
    }

    const minus = () => {
        setInputValue(prev => prev > 1 ? prev - 1 : 1);
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
                                <Slider {...settings2} ref={zoomSliderBigRef} className="ZoomSliderBig">
                                    {[2, 4, 5, 3].map((index) => (
                                        <div className="ImageZoom" key={index}>
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={2}
                                                src={zoomedSrc}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            <Slider {...settings} className="ZoomSlider">
                                {[2, 4, 5, 3].map((index) => (
                                    <div className="itemnew" key={index}>
                                        <img
                                            src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-${index}.jpg`}
                                            alt="cppa"
                                            className='w-100'
                                            onClick={() => handleThumbnailClick(index)}
                                        />
                                    </div>
                                ))}
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
                                    {[50, 60, 80, 100, 120].map((size, index) => (
                                        <li className='list-inline-item' key={index}>
                                            <a className={`tag ${activeSize === index ? 'active' : ''}`}
                                                onClick={() => isActive(index)}>{size}g</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='addCartSection pt-4 pb-4 d-flex align-items-center'>
                                <div className="counterSection">
                                    <input type='number' value={inputValue} readOnly />
                                    <span className='arrow plus'
                                        onClick={plus}>
                                        <KeyboardArrowUpIcon />
                                    </span>
                                    <span className='arrow minus'
                                        onClick={minus}>
                                        <KeyboardArrowDownIcon />
                                    </span>
                                </div>
                                <button className='btn-add'><ShoppingCartSharpIcon />Add to cart</button>
                                <button className='btn-add fav'><FavoriteBorderSharpIcon /></button>
                                <button className='btn-add compare'><CompareArrowsSharpIcon /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card  p-5 detailspageTab'>
                    <div className="customTabs">

                        <ul className=' d-flex list-inline-items '>
                            <li className='list-inline-items ifo' onClick={() => setActiveTabs(0)} >Description</li>
                            <li className='list-inline-items ifo' onClick={() => setActiveTabs(1)}>Additional info</li>
                            <li className='list-inline-items ifo' onClick={() => setActiveTabs(2)}>Vendor</li>
                            <li className='list-inline-items ifo'>Reviews({Math.floor(Math.random() * 10) + 1})</li>



                        </ul>


                        {
                            activeTabs === 0 &&
                            <div className="tabContent">
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                    <br />
                                    <br />
                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                </p>

                                <div className='product-infolistr'>
                                    <ul className='productdetailsList'>
                                        <li>Type Of Packing
                                        </li>
                                        <li>Color</li>
                                        <li>Quantity Per Case
                                        </li>
                                        <li>Ethyl Alcohol
                                        </li>
                                        <li>Piece In One
                                        </li>
                                    </ul>
                                    <ul className='productdetailsList-second '>
                                        <li>Bottle
                                        </li>
                                        <li>Green, Pink, Powder Blue, Purple</li>
                                        <li>Quantity Per Case
                                        </li>
                                        <li>100ml
                                        </li>
                                        <li>Carton
                                        </li>
                                    </ul>
                                </div>
                                <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.

                                </p>
                                <h2>Packaging & Delivery
                                </h2>
                                <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

                                </p>
                                <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.

                                </p>
                                <h3>Suggested Use
                                </h3>
                                <p>Refrigeration not necessary.<br />
                                    Stir before serving</p>



                                <h2>Other Ingredients
                                </h2>
                                <p>Organic raw pecans, organic raw cashews.<br />
                                    This butter was produced using a LTG (Low Temperature Grinding) process<br />
                                    Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>

                                <h2>Warnings</h2>
                                <p>Oil separation occurs naturally. May contain pieces of shell.
                                </p>


                            </div>

                        }

                        {activeTabs === 1 &&
                            <div className="tabContent">
                                <div className='table-responsive'>

                                    <table className='table table-bordered'>
                                        <tbody className='table-content'>
                                            <tr class="stand-up">
                                                <th>Stand Up</th>
                                                <td>
                                                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                </td>
                                            </tr>
                                            <tr class="folded-wo-wheels">
                                                <th>Folded (w/o wheels)</th>
                                                <td>
                                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                                </td>
                                            </tr>
                                            <tr class="folded-w-wheels">
                                                <th>Folded (w/ wheels)</th>
                                                <td>
                                                    <p>32.5″L x 24″W x 18.5″H</p>
                                                </td>
                                            </tr>
                                            <tr class="door-pass-through">
                                                <th>Door Pass Through</th>
                                                <td>
                                                    <p>24</p>
                                                </td>
                                            </tr>
                                            <tr class="frame">
                                                <th>Frame</th>
                                                <td>
                                                    <p>Aluminum</p>
                                                </td>
                                            </tr>
                                            <tr class="weight-wo-wheels">
                                                <th>Weight (w/o wheels)</th>
                                                <td>
                                                    <p>20 LBS</p>
                                                </td>
                                            </tr>
                                            <tr class="weight-capacity">
                                                <th>Weight Capacity</th>
                                                <td>
                                                    <p>60 LBS</p>
                                                </td>
                                            </tr>
                                            <tr class="width">
                                                <th>Width</th>
                                                <td>
                                                    <p>24″</p>
                                                </td>
                                            </tr>
                                            <tr class="handle-height-ground-to-handle">
                                                <th>Handle height (ground to handle)</th>
                                                <td>
                                                    <p>37-45″</p>
                                                </td>
                                            </tr>
                                            <tr class="wheels">
                                                <th>Wheels</th>
                                                <td>
                                                    <p>12″ air / wide track slick tread</p>
                                                </td>
                                            </tr>
                                            <tr class="seat-back-height">
                                                <th>Seat back height</th>
                                                <td>
                                                    <p>21.5″</p>
                                                </td>
                                            </tr>
                                            <tr class="head-room-inside-canopy">
                                                <th>Head room (inside canopy)</th>
                                                <td>
                                                    <p>25″</p>
                                                </td>
                                            </tr>
                                            <tr class="pa_color">
                                                <th>Color</th>
                                                <td>
                                                    <p>Black, Blue, Red, White</p>
                                                </td>
                                            </tr>
                                            <tr class="pa_size">
                                                <th>Size</th>
                                                <td>
                                                    <p>M, S</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                        {activeTabs === 2 && <div className="tabContent">

                            <div className="row">
                                <div className='col-md-3 vendor-hai'>

                                    <div className="vendor-logo">
                                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-18.svg' alt="vendor" />
                                    </div>
                                    <div className="vendor-info">
                                        <h6>Noodles Co.</h6>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={5}
                                            precision={0.5}
                                            readOnly
                                        />
                                        (32 reviews) </div>
                                </div>
                                <div className="vendor-address">
                                    <h6>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</h6>
                                    <h6>Contact Seller:(+91) - 540-025-553</h6>
                                </div>

                                <div className="vendor-rating">
                                    <div className="see">
                                        <h5>Rating</h5>
                                        <h4>92%</h4>
                                    </div>
                                    <div className="see">
                                        <h5>Ship on time</h5>
                                        <h4>100%</h4>
                                    </div>
                                    <div className="see">
                                        <h5>Chat response

                                        </h5>
                                        <h4>89%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="vendor-shopaddress">
                                <p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>
                            </div>

                        </div>}

                    </div>









                </div>




            </div>
        </section >
    )
}

export default Details;
