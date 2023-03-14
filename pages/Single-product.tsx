import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export default function SingleProduct() {
    return (
        <>
            <section>
                <Header />
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h1 className="breadmome-name">Single Product</h1>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Single Product</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-details-area pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-12">
                                {/* <!--Tab Content Start--> */}
                                <div className="tab-content product-details-large" id="myTabContent">
                                    <div className="tab-pane fade show active" id="single-slide-one">
                                        {/* <!--Single Product Image Start--> */}
                                        <div className="single-product-img img-full">
                                            <Image src="/img/product/large/product-large1.jpg" alt="" width={200} height={100} />
                                            <Link className="venobox" data-gall="gallery01" href="img/product/large/product-large1.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </div>
                                        {/* <!--Single Product Image End--> */}
                                    </div>
                                    <div className="tab-pane fade" id="single-slide-two">
                                        {/* <!--Single Product Image Start--> */}
                                        <div className="single-product-img img-full">
                                            <Image src="/img/product/large/product-large2.jpg" alt="" width={200} height={100} />
                                            <Link className="venobox" data-gall="gallery01" href="img/product/large/product-large2.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </div>
                                        {/* <!--Single Product Image End--> */}
                                    </div>
                                    <div className="tab-pane fade" id="single-slide-three">
                                        {/* <!--Single Product Image Start--> */}
                                        <div className="single-product-img img-full">
                                            <Image src="/img/product/large/product-large3.jpg" alt="" width={200} height={100} />
                                            <Link className="venobox" data-gall="gallery01" href="img/product/large/product-large3.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </div>
                                        {/* <!--Single Product Image End--> */}
                                    </div>
                                    <div className="tab-pane fade" id="single-slide-four">
                                        {/* <!--Single Product Image Start--> */}
                                        <div className="single-product-img img-full">
                                            <Image src="/img/product/large/product-large4.jpg" alt="" width={200} height={100} />
                                            <Link className="venobox" data-gall="gallery01" href="img/product/large/product-large4.jpg"><i className="fa fa-search-plus"></i></Link>
                                        </div>
                                        {/* <!--Single Product Image End--> */}
                                    </div>
                                </div>
                                {/* <!--Tab Content End-->
                        <!--Tab Menu Start--> */}
                                <div className="single-product-menu">
                                    <div className="nav single-slide-menu" role="tablist">
                                        <div className="single-tab-menu img-full">
                                            <Link className="active" data-bs-toggle="tab" href="#single-slide-one"><Image src="/img/product/product8.jpg" alt="" width={200} height={100} /></Link>
                                        </div>
                                        <div className="single-tab-menu img-full">
                                            <Link data-bs-toggle="tab" href="#single-slide-two"><Image src="/img/product/product5.jpg" alt="" width={200} height={100} /></Link>
                                        </div>
                                        <div className="single-tab-menu img-full">
                                            <Link data-bs-toggle="tab" href="#single-slide-three"><Image src="/img/product/product1.jpg" alt="" width={200} height={100} /></Link>
                                        </div>
                                        <div className="single-tab-menu img-full">
                                            <Link data-bs-toggle="tab" href="#single-slide-four"><Image src="/img/product/product13.jpg" alt="" width={200} height={100} /></Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Tab Menu End--> */}
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="single-product-content">
                                    <h1 className="single-product-name">Adams Men $aptos s Dunbar</h1>
                                    <div className="single-product-reviews">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="single-product-price">
                                        <div className="product-discount">
                                            <span className="price">$80.00</span>
                                            <span className="discount">-20%</span>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, consequatur. Doloremque quod, minima fuga cumque amet molestiae, nemo? Expedita, assumenda.</p>
                                    </div>
                                    <div className="single-product-action">
                                        <form action="#">
                                            <div className="product-variants">
                                                <div className="product-variants-item">
                                                    <span className="control-label">Size</span>
                                                    <select className="nice-select" name="size">
                                                        <option value="1">S</option>
                                                        <option value="2">M</option>
                                                        <option value="3">X</option>
                                                        <option value="4">XL</option>
                                                    </select>
                                                </div>
                                                <div className="product-variants-item">
                                                    <span className="control-label">Color</span>
                                                    <select className="nice-select" name="color">
                                                        <option value="1">Red</option>
                                                        <option value="2">Green</option>
                                                        <option value="3">Blue</option>
                                                        <option value="4">White</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="product-add-to-cart">
                                                <span className="control-label">Quantity</span>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="0" />
                                                </div>
                                                <div className="add">
                                                    <button className="add-to-cart-2">Add To Cart </button>
                                                    <span className="product-availability">In stock</span>
                                                </div>
                                            </div>
                                        </form>
                                        {/* <!--Single Product Share--> */}
                                        <div className="single-product-share mt-20">
                                            <ul>
                                                <li className="categories-title">Share :</li>
                                                <li><i className="fa fa-facebook"></i></li>
                                                <li><i className="fa fa-twitter"></i></li>
                                                <li><i className="fa fa-google-plus"></i></li>
                                                <li><i className="fa fa-pinterest"></i></li>
                                            </ul>
                                        </div>
                                        {/* <!--Single Product Share--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-product-review-tab pt-85">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="single-product-review-and-description-area">
                                    {/* <!--Review And Description Tab Menu Start--> */}
                                    <ul className="nav dec-and-review-menu">
                                        <li>
                                            <Link className="active" data-bs-toggle="tab" href="#description">Description</Link>
                                        </li>
                                        <li>
                                            <Link data-bs-toggle="tab" href="#product-details">Product Details</Link>
                                        </li>
                                        <li>
                                            <Link data-bs-toggle="tab" href="#reviews">Reviews</Link>
                                        </li>
                                    </ul>
                                    {/* <!--Review And Description Tab Menu End-->
                            <!--Review And Description Tab Content Start--> */}
                                    <div className="tab-content product-review-content-tab mt-30" id="myTabContent-4">
                                        <div className="tab-pane fade show active" id="description">
                                            <div className="single-product-description">
                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman $aptos s wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-details">
                                            <div className="product-details">
                                                <div className="product-manufacturer">
                                                    
                                                        <Image src="/img/logo/logo.jpg" alt="" width={200} height={100} />
                                                    
                                                </div>
                                                <div className="product-reference">
                                                    <label className="label">Reference </label> <span className="demo-list">demo_13</span>
                                                </div>
                                                <div className="product-quantities">
                                                    <label className="label">In stock</label> <span className="item">300 Items</span>
                                                </div>
                                                <div className="product-out-of-stock"></div>
                                                <div className="product-features">
                                                    <h3>Data sheet</h3>
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Compositions</td>
                                                                <td>Cotton</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Styles</td>
                                                                <td>Casual</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Properties</td>
                                                                <td>Short Sleeve</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="reviews">
                                            <div className="review-page-comment">
                                                <div className="review-comment">
                                                    <h2>Write your review</h2>
                                                    <ul className="pro-comments-rating">
                                                        <li>
                                                            <label>Quality</label>
                                                            <div className="single-product-reviews">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-form">
                                                    <form action="#">
                                                        <label>Title for your review<sup className="required">*</sup></label>
                                                        <input type="text" placeholder="Title Here" name="title" />
                                                        <label>your review<sup className="required">*</sup></label>
                                                        <textarea id="content" name="content"></textarea>
                                                        <label>Your name<sup className="required">*</sup></label>
                                                        <input type="text" placeholder="Your Name" name="title" />
                                                        <div className="send-your-review">
                                                            <p className="required-fields"><sup>*</sup> Required fields</p>
                                                            <div className="send-cancel-btn">
                                                                <button className="send-btn">Send</button>
                                                                or
                                                                <button className="cancel-btn">Cancel</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--Review And Description Tab Content End--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title mb-60">
                                    <h2>Related Product</h2>
                                    <p>Pursue pleasure rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-3 col-sm-6 col-12">
                                {/* <!--Single Product Area Start--> */}
                                <div className="single-product-area mb-30">
                                    <div className="product-img img-full">
                                        <Link href="/Single-product">
                                            <Image src="/img/product/product9.jpg" alt="" width={200} height={10} />
                                            <Link href="/" className="add-to-cart"><i className="fa fa-cart-plus"></i>add to cart</Link>
                                        </Link>
                                    </div>
                                    <div className="product-content">
                                        <h4 className="title"><Link href="/Single-product">Black Cable Restorer</Link></h4>
                                        <span className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <h4 className="price"><span className="new">$25</span><span className="old">$33</span></h4>
                                    </div>
                                </div>
                                {/* <!--Single Product Area End--> */}
                            </div>
                            <div className="col-md-4 col-lg-3 col-sm-6 col-12">
                                {/* <!--Single Product Area Start--> */}
                                <div className="single-product-area mb-30">
                                    <div className="product-img img-full">
                                        <Link href="/Single-product">
                                            <Image src="/img/product/product10.jpg" alt="" width={200} height={10} />
                                            <Link href="/" className="add-to-cart"><i className="fa fa-cart-plus"></i>add to cart</Link>
                                        </Link>
                                    </div>
                                    <div className="product-content">
                                        <h4 className="title"><Link href="/Single-product">Black Cable Restorer</Link></h4>
                                        <span className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <h4 className="price"><span className="new">$25</span><span className="old">$33</span></h4>
                                    </div>
                                </div>
                                {/* <!--Single Product Area End--> */}
                            </div>
                            <div className="col-md-4 col-lg-3 col-sm-6 col-12">
                                {/* <!--Single Product Area Start--> */}
                                <div className="single-product-area mb-30">
                                    <div className="product-img img-full">
                                        <Link href="/Single-product">
                                            <Image src="/img/product/product11.jpg" alt="" width={200} height={10} />
                                            <Link href="/" className="add-to-cart"><i className="fa fa-cart-plus"></i>add to cart</Link>
                                        </Link>
                                    </div>
                                    <div className="product-content">
                                        <h4 className="title"><Link href="/Single-product">Black Cable Restorer</Link></h4>
                                        <span className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <h4 className="price"><span className="new">$25</span><span className="old">$33</span></h4>
                                    </div>
                                </div>
                                {/* <!--Single Product Area End--> */}
                            </div>
                            <div className="col-md-4 col-lg-3 col-sm-6 col-12">
                                {/* <!--Single Product Area Start--> */}
                                <div className="single-product-area mb-30">
                                    <div className="product-img img-full">
                                        <Link href="/Single-product">
                                            <Image src="/img/product/product12.jpg" alt="" width={200} height={10} />
                                            <Link href="#" className="add-to-cart"><i className="fa fa-cart-plus"></i>add to cart</Link>
                                        </Link>
                                    </div>
                                    <div className="product-content">
                                        <h4 className="title"><Link href="/Single-product">Black Cable Restorer</Link></h4>
                                        <span className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <h4 className="price"><span className="new">$25</span><span className="old">$33</span></h4>
                                    </div>
                                </div>
                                {/* <!--Single Product Area End--> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}