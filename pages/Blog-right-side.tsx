import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
export default function BlogRight(){
    return(
        <>
        <section>
            <Header/>
            <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Blog Right Sidebar</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Blog Right Sidebar</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="blog-area pt-100 pb-40">
		    <div className="container">
                <div className="row">
                   <div className="col-lg-3 order-2 order-lg-2">
		                <div className="sidebar-widget">
                          <div className="single-sidebar-widget">
                                <h4 className="title">Popular Post</h4>
                                <div className="sidebar-rc-post">
                                      <ul>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img1.jpg" alt="" width={200} height={200}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 18,  2018</div>
                                                  <h4><Link href="/Single-blog">Children Help</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={200}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 16,  2018</div>
                                                  <h4><Link href="/Single-blog">Clean Watter Foundation</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={200}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 14,  2018</div>
                                                  <h4><Link href="/Single-blog">Help African children</Link></h4>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                          <div className="single-sidebar-widget">
                                <h4 className="title">Categories</h4>
                                <ul className="course-categoris">
                                    <li><Link href="#">Political Science<span>10</span></Link></li>
                                    <li><Link href="#">Micro Biology<span>15</span></Link></li>
                                    <li><Link href="#">Computer Science<span>05</span></Link></li>
                                    <li><Link href="#">Business Leaders Guide<span>19</span></Link></li>
                                    <li><Link href="#">Become a Product Manage<span>21</span></Link></li>
                                    <li><Link href="#">Business Economics<span>14</span></Link></li>
                                    <li><Link href="#">Language Education<span>13</span></Link></li>
                                    <li><Link href="#">Social Media Management<span>18</span></Link></li>
                                </ul>
                            </div>
                          <div className="single-sidebar-widget">
                                <h4 className="title">Recent Post</h4>
                                <div className="sidebar-rc-post">
                                      <ul>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={200}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 18,  2018</div>
                                                  <h4><Link href="/Single-blog">Children Help</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-causes"><Image src="/img/rc-img/rc-img4.jpg" alt="" width={200} height={200}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 16,  2018</div>
                                                  <h4><Link href="/Single-blog">Clean Watter Foundation</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-causes"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={200}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 14,  2018</div>
                                                  <h4><Link href="/Single-blog">Help African children</Link></h4>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                          <div className="single-sidebar-widget">
                                <div className="widget-banner img-full">
                                    <Link href="#"><Image src="/img/banner/banner1.png" alt="" width={200} height={200}/></Link>
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
                   <div className="col-lg-9 order-1 order-lg-1">
                        <div className="row">
                            {/* <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog1.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>25 Oct, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Marathon compitition for fund rising</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog2.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>12 Nov, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Africa children need more food</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog3.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>15 Apr, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Africa children water and clothes</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog4.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>25 Feb, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">How to use international network</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog5.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>25 Oct, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Africa children run the runway</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog6.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>12 Nov, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Nearly 200 million children</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog7.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>15 Apr, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Africa children the world were abused</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog8.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>25 Feb, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Marathon compitition for fund rising</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog3.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>25 Oct, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Marathon compitition for fund rising</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog5.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>12 Nov, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">How to use international network</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog2.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>15 Apr, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Africa children the world were abused</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End-->
                            <!--Single Blog Start--> */}
                            <div className="col-lg-6 col-xl-4 col-md-6">
                                <div className="single-blog mb-30">
                                    <div className="blog-img img-full">
                                        <Link href="/Single-blog"><Image src="/img/blog/small/blog8.jpg" alt="" width={200} height={200}/></Link>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="meta">
                                            <li>By <Link href="#">Jenifer</Link></li>
                                            <li>25 Feb, 2018 </li>
                                        </ul>
                                        <h4 className="title"><Link href="/Single-blog">Marathon compitition for fund rising</Link></h4>
                                        <Link href="/Single-blog">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Single Blog End--> */}
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
		    </div>
		</div>
            <Footer/>
            
        </section>
        </>
    )
}