import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import Product from '../../component/products';
const Details = (props) => {
    let { id } = useParams();
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
    var related = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: 1000,
        centerMode: true,
    };
    const zoomSliderBigRef = useRef(null);

    const [activeSize, setActiveSize] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [currentProduct, setCurrentProduct] = useState({});

    const [zoomedSrc, setZoomedSrc] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const handleThumbnailClick = (index) => {
        // setZoomedSrc(`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-${index}.jpg`);
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
    useEffect(() => {
        window.scrollTo(0, 0);

        props.data.length !== 0 && props.data.map((item) => {
            item.items.length !== 0 && item.items.map((item_) => {
                item_.products.length !== 0 && item_.products.map((product) => {
                    if (parseInt(product.id) === parseInt(id)) {
                        setCurrentProduct(product)
                    }
                })
            })
        })
    }, [id])

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
            {
                console.log(currentProduct, "These are current products")
            }
            <div className="container detailsContainer">
                <div className="row ">
                    <div className='col-md-9 part1 d-flex'>
                        <div className='col-md-5'>

                            <div className="productZoom">
                                <Slider {...settings2} ref={zoomSliderBigRef} className="ZoomSliderBig">

                                    {currentProduct.productImages !== undefined &&
                                        currentProduct.productImages.map((imgUrl, index) => {
                                            return (
                                                <div className="ImageZoom" key={index}>
                                                    <InnerImageZoom
                                                        zoomType="hover"
                                                        zoomScale={2}
                                                        src={imgUrl} // Assuming you meant to use imgUrl here
                                                        afterZoomIn={() => setZoomedSrc(imgUrl)} // Change the state here

                                                    />

                                                </div>
                                            );
                                        })
                                    }


                                </Slider>
                            </div>

                            <Slider {...settings} className="ZoomSlider">




                                {
                                    currentProduct.productImages !== undefined &&
                                    currentProduct.productImages.map((imgUrl, index) => {
                                        return (
                                            <div className="itemnew" key={index}>
                                                <img
                                                    src={imgUrl}
                                                    alt="cppa"
                                                    className='w-100'
                                                    onClick={() => handleThumbnailClick(index)}
                                                />
                                            </div>
                                        );
                                    })
                                }


                            </Slider>
                        </div>
                        <div className='col-md-7 productInfo'>
                            <h1>{currentProduct.productName}</h1>
                            <div className='d-flex align-items-center mb-4'>
                                <Rating
                                    name="half-rating-read"
                                    value={parseFloat(currentProduct.rating)}
                                    precision={0.5}
                                    readOnly
                                /> (32 reviews)
                            </div>
                            <div className="priceSec d-flex align-items-center mb-4">
                                <span className="text-g priceLarge">Rs.{currentProduct.price}</span>
                                <div className='ml-2 d-flex flex-column'>
                                    <span className='text-org'>{currentProduct.discount}%off</span>
                                    <span className='oldp'>Rs.{currentProduct.oldPrice}</span>
                                </div>
                            </div>
                            <p className='priceSec-details'>{currentProduct.description}</p>
                            <div className='ProductSize d-flex align-items-center'>
                                {currentProduct.weight !== undefined && currentProduct.weight.length !== 0 && (
                                    <>
                                        <span className='productut'>Size / Weight:</span>
                                        <ul className="list list-inline mb-0 pl-4">
                                            {currentProduct.weight.map((item, index) => (
                                                <li className='list-inline-item' key={index}>
                                                    <a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>
                                                        {item}g
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            <div className='ProductSize d-flex align-items-center'>
                                {currentProduct.RAM !== undefined && currentProduct.RAM.length !== 0 && (
                                    <>
                                        <span>RAM:</span>
                                        <ul className="list list-inline mb-0 pl-4">
                                            {currentProduct.RAM.map((RAM, index) => (
                                                <li className='list-inline-item' key={index}>
                                                    <a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>
                                                        {RAM}Gb
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            <div className='ProductSize d-flex align-items-center'>
                                {currentProduct.SIZE !== undefined && currentProduct.SIZE.length !== 0 && (
                                    <>
                                        <span>Size:</span>
                                        <ul className="list list-inline mb-0 pl-4">
                                            {currentProduct.SIZE.map((size, index) => (
                                                <li className='list-inline-item' key={index}>
                                                    <a className={`tag ${activeSize === index ? 'active' : ''}`} onClick={() => isActive(index)}>
                                                        {size}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
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
                            <li className='list-inline-items ifo' onClick={() => setActiveTabs(3)}>Reviews({Math.floor(Math.random() * 10) + 1})</li>
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
                        {activeTabs === 3 && <div className="tabContent">
                            <div className="reviews col-md-12">
                                <div className="col-md-12 profiles" >
                                    <h4>Customer questions & answers
                                    </h4>

                                    <div className="real-reviews">
                                        <div className="left-image">
                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt='profilr pic' />
                                            <h5>sienna</h5>
                                        </div>
                                        <div className="right-comments">
                                            <div className="date">
                                                <h6>December 4, 2022 at 3:12 pm
                                                </h6>
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={5}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                                <br />
                                                <br />
                                            </div>
                                            <div className='comment'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="real-reviews">
                                        <div className="left-image">
                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-3.png" alt='profilr pic' />
                                            <h5>Chummi</h5>
                                        </div>
                                        <div className="right-comments">
                                            <div className="date">
                                                <h6>December 4, 2022 at 3:12 pm
                                                </h6>
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={4}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                                <br />
                                                <br />
                                            </div>
                                            <div className='comment'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="real-reviews">
                                        <div className="left-image">
                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-4.png" alt='profilr pic' />
                                            <h5>Gemma</h5>
                                        </div>
                                        <div className="right-comments">
                                            <div className="date">
                                                <h6>December 4, 2022 at 3:12 pm
                                                </h6>
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={3}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                                <br />
                                                <br />
                                            </div>
                                            <div className='comment'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form className='review-form'>
                                        <h4>Add a review</h4>
                                        <Rating className='rate'
                                            name="half-rating-read"
                                            defaultValue={0}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <textarea className='form-control' placeholder='Write a review'></textarea>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <input type='text' className='form-control' placeholder='Name' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <input type='text' className='form-control' placeholder='Email' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <input type='text' className='form-control' placeholder='Website' />
                                                </div>
                                            </div>
                                        </div>
                                        <button className='review-button' >Submit Review</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <br />
                <div className="relatedproduts pt-5 pb-4">
                    <h3><strong>Related products</strong></h3>
                    <br />
                    <Slider {...related} className="row productRow">
                        <div className="item">
                            <Product tag="sale" className="yyyy" />
                        </div>
                        <div className="item">
                            <Product tag="new" className="yyyy" />
                        </div>
                        <div className="item">
                            <Product tag="best" className="yyyy" />
                        </div>
                        <div className="item">
                            <Product tag="hot" className="yyyy" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section >
    )
}
export default Details;
