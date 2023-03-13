 import Image from "next/image";
 import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

 export default function SingleBlog(){
    return(
        <>
        <section>
            <Header/>
            <div className="breadcrumb-area">
		    <div className="container">
		        <div className="row">
		            <div className="col-12">
		                <div className="breadcrumb-content text-center">
                            <h1 className="breadmome-name">Single Blog</h1>
		                    <ul>
		                        <li><Link href="/">Home</Link></li>
		                        <li className="active">Single Blog</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="single-blog-area pt-100 pb-100">
		    <div className="container">
                <div className="row">
                   <div className="col-lg-3 order-2 order-lg-1">
		                <div className="sidebar-widget pr-35">
                          <div className="single-sidebar-widget">
                                <h4 className="title">Popular Post</h4>
                                <div className="sidebar-rc-post">
                                      <ul>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img1.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 18,  2018</div>
                                                  <h4><Link href="/Single-blog">Children Help</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 16,  2018</div>
                                                  <h4><Link href="/Single-blog">Clean Watter Foundation</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={100}/></Link>
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
                                                  <Link href="/Single-blog"><Image src="/img/rc-img/rc-img2.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 18,  2018</div>
                                                  <h4><Link href="/Single-blog">Children Help</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="single-causes.html"><Image src="/img/rc-img/rc-img4.jpg" alt="" width={200} height={100}/></Link>
                                              </div>
                                              <div className="rc-post-content">
                                                  <div className="widget-date">january 16,  2018</div>
                                                  <h4><Link href="/Single-blog">Clean Watter Foundation</Link></h4>
                                              </div>
                                          </li>
                                          <li>
                                              <div className="rc-post-thumb img-full">
                                                  <Link href="single-causes.html"><Image src="/img/rc-img/rc-img3.jpg" alt="" width={200} height={100}/></Link>
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
                   <div className="col-lg-9 order-1 order-lg-2">
                        <div className="blog-wrapper blog-details">
                            <div className="blog-img img-full">
                                <Image src="/img/blog/large/blog1.jpg" alt="" width={200} height={100}/>
                            </div>
                            <div className="blog-content details-content">
                                <ul className="meta">
                                    <li>By <Link href="#">Jenifer</Link></li>
                                    <li>25 Oct, 2018 </li>
                                </ul>
                                <h3 className="title">Marathon compitition for fund rising</h3>
                                <p>Astha boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure</p>
                                <p>Astha boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure  obtain</p>
                                <div className="row">
                                   <div className="col-md-6">
                                       <ul className="blog-post-list">
                                            <li> Astha boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                            <li> Astha boluptatum deleniti atque corrupti sdolores et quas cepturi sint  eca itate non similique </li>
                                            <li> Astha boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
                                            <li> Astha boluptatum deleniti atque corrupti sdolores et quas molestias  non similique </li>
                                            <li> Astha boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate </li>
                                        </ul>
                                   </div>
                                    <div className="col-md-6">
                                        <div className="blog-post-list-img img-full">
                                            <Image src="/img/blog/small/blog2.jpg" alt="" width={200} height={100}/>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="mb-40">The first forty years of life give us the text; the next thirty supply the commentary on it.</blockquote>
                                <p>Astha boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure  obtain</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate eum, quaerat commodi reiciendis beatae incidunt cupiditate molestiae natus atque aliquid illum nulla accusantium perferendis sint corporis accusamus quae, esse numquam totam! Voluptas sunt dolorum minus error accusantium veniam, dignissimos incidunt! Assumenda quisquam labore illum praesentium, aperiam excepturi quos! Hic, voluptatum.</p>
                            </div>
                        </div>
                        <div className="blog-author mt-60">
                            <h4 className="small-title">Author</h4>
                            <div className="blog-author-box">
                                <div className="blog-author-img">
                                    <Image src="/img/author/author1.jpg" alt="" width={200} height={100}/>
                                </div>
                                <div className="blog-author-content">
                                    <h6>Stuart Smith</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit veniam, tenetur dolorum omnis. Tempora voluptatum deleniti laboriosam nemo hic aliquam nobis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="common-tag-and-next-prev mt-60">
                            <div className="common-tag">
                                <h6>Tags: </h6>
                                <ul>
                                    <li><Link href="#">child,</Link></li>
                                    <li><Link href="#">Food,</Link></li>
                                    <li><Link href="#">Helth</Link></li>
                                </ul>
                            </div>
                            <div className="blog-share">
                                <h6>Share:</h6>
                                <ul>
                                    <li><Link href="#">Facebook,</Link></li>
                                    <li><Link href="#">Tweeter,</Link></li>
                                    <li><Link href="#">Google+</Link></li>
                                </ul>
                            </div>
                            <div className="next-prev-post">
                                <ul>
                                    <li><Link href="#"><i className="fa fa-long-arrow-left"></i> Previous</Link></li>
                                    <li><Link href="#">Next<i className="fa fa-long-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="comment-list mt-60">
                            <h4 className="small-title">Comments</h4>
                            <div className="comment">
                                <div className="blog-author-img">
                                    <Image src="/img/author/author2.jpg" alt="" width={200} height={100}/>
                                </div>
                                <div className="comment-content">
                                    <div className="comment-content-top">
                                        <h6>Alvaro Santos</h6>
                                        <span>08 Jun 2017</span>
                                    </div>
                                    <Link href="#" className="reply">Reply</Link>
                                    <div className="comment-content-bottom">
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and ising pain  borand I will give you a complete account of the system</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment reply">
                                <div className="blog-author-img">
                                    <Image src="/img/author/author3.jpg" alt="" width={200} height={100}/>
                                </div>
                                <div className="comment-content">
                                    <div className="comment-content-top">
                                        <h6>Julia thomas</h6>
                                        <span>06 Jun 2017</span>
                                    </div>
                                    <Link href="#" className="reply">Reply</Link>
                                    <div className="comment-content-bottom">
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and ising pain  borand I will give you a complete account of the system</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="blog-author-img">
                                    <Image src="/img/author/author4.jpg" alt="" width={200} height={100}/>
                                </div>
                                <div className="comment-content">
                                    <div className="comment-content-top">
                                        <h6>Nicolus Christopher</h6>
                                        <span>08 Jun 2017</span>
                                    </div>
                                    <Link href="#" className="reply">Reply</Link>
                                    <div className="comment-content-bottom">
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and ising pain  borand I will give you a complete account of the system</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-box mt-60">
                            <h4 className="small-title">Leave a comment</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input name="commenter-name" placeholder="Name" id="commenter-name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input name="commenter-email" placeholder="Email" id="commenter-email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <textarea name="commenter-message" placeholder="Message" id="commenter-message" cols={30} rows={5}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <button className="sent-btn" type="submit">SEND Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
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