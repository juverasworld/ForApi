import Image from "next/image";
import Link from "next/link";
export default function shop(){
    return(
        <>
        <section className="wrapper">
        <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Shop</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Shop</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>  
        <div className="shop-layout-area pt-100 pb-80">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-9">
		                <div className="product-left-sidebar-area">
		                    <div className="row">
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product1.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product2.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product3.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product4.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product5.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product6.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product7.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product8.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product9.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product10.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product11.jpg" alt="" width={200} height={100}/>
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
		                        <div className="col-md-4 col-sm-6 col-12">
		                            {/* <!--Single Product Area Start--> */}
		                            <div className="single-product-area mb-30">
		                                <div className="product-img img-full">
		                                    <Link href="/Single-product">
		                                        <Image src="/img/product/product12.jpg" alt="" width={200} height={100}/>
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
		                    <div className="row">
                                <div className="col-12">
                                    {/* <!--Pagination Start--> */}
                                    <div className="product-pagination">
                                        <ul>
                                            <li className="active"><Link href="#">1</Link></li>
                                            <li><Link href="#">2</Link></li>
                                            <li><Link href="#">3</Link></li>
                                            <li><Link href="#">4</Link></li>
                                            <li><Link href="#">5</Link></li>
                                            <li><Link href="#"><i className="fa fa-angle-double-right"></i></Link></li>
                                        </ul>
                                    </div>
                                    {/* <!--Pagination End--> */}
                                </div>
                            </div>
		                </div>
		            </div>
		            <div className="col-lg-3">
		                <div className="sidebar-widget">
                          <div className="single-sidebar-widget">
                              <h4 className="title">Search</h4>
                              <div className="sidebar-form">
                                  <form action="#">
                                      <input type="text" placeholder="Search"/>
                                      <button type="submit"><i className="fa fa-search"></i></button>
                                  </form>
                              </div>
                          </div>
                          <div className="single-sidebar-widget">
                                <h4 className="title">Categories</h4>
                                <ul className="course-categoris">
                                    <li><Link href="#">T shirt<span>10</span></Link></li>
                                    <li><Link href="#">Half shirt<span>15</span></Link></li>
                                    <li><Link href="#">Cap<span>05</span></Link></li>
                                    <li><Link href="#">Pendrive<span>19</span></Link></li>
                                    <li><Link href="#">Pen<span>21</span></Link></li>
                                    <li><Link href="#">Pen Holder<span>14</span></Link></li>
                                    <li><Link href="#">Flower Vasel<span>13</span></Link></li>
                                    <li><Link href="#">Wall clock<span>18</span></Link></li>
                                </ul>
                            </div>
                          <div className="single-sidebar-widget">
                                <h4 className="title">Recent Product</h4>
                                <div className="sidebar-rc-post shop-rc">
                                      <ul>
                                          <li>
                                              <div className="rc-product-thumb img-full">
                                                  <Link href="/Single-product"><Image src="/img/rc-img/product-rc-img1.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-product-content">
                                                  <h4><Link href="/Single-product">Polo T-shirt</Link></h4>
                                                  <span className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                   </span>
                                                   <h5 className="price"><span className="new">$25</span><span className="old">$33</span></h5>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-product-thumb img-full">
                                                  <Link href="/Single-product"><Image src="/img/rc-img/product-rc-img2.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-product-content">
                                                  <h4><Link href="/Single-product">Polo T-shirt</Link></h4>
                                                  <span className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                   </span>
                                                   <h5 className="price"><span className="new">$25</span><span className="old">$33</span></h5>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-product-thumb img-full">
                                                  <Link href="/Single-product"><Image src="/img/rc-img/product-rc-img3.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-product-content">
                                                  <h4><Link href="/Single-product">Polo T-shirt</Link></h4>
                                                  <span className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                   </span>
                                                   <h5 className="price"><span className="new">$25</span><span className="old">$33</span></h5>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                          <div className="single-sidebar-widget">
                                <div className="widget-banner img-full">
                                    <Link href="#"><Image src="/img/banner/banner1.png" alt="" width={200} height={100}/></Link>
                                </div>
                            </div>
                          <div className="single-sidebar-widget">
                                <h4 className="title">Tags</h4>
                                <ul className="tags">
                                    <li><Link href="#">Photoshop</Link></li>
                                    <li><Link href="#">Design</Link></li>
                                    <li><Link href="#">Tutorial</Link></li>
                                    <li><Link href="#">Courses</Link></li>
                                    <li><Link href="#">Premium</Link></li>
                                    <li><Link href="#">Designtuto</Link></li>
                                </ul>
                            </div>
                        </div>
		            </div>
		        </div>
		    </div>
		</div>
            </section></>
    )
}