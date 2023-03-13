import Image from 'next/image'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
export default function Header2({
    children,
    home
  }: {
    children?: React.ReactNode
    home?: boolean
}){
    return ( <>
    <header>
		    {/* <!--Default Header Area Start--> */}
		    <div className="default-header-area header-sticky header-absolute header-style-2">
		        <div className="container">
		            <div className="row align-items-center">
		                {/* <!--Header Logo Start--> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo">
                                <a href="index.html"><Image src="/img/logo/logo.png" alt="" width={200} height={80}/></a>
                            </div>
                        </div>
                        {/* <!--Header Logo End-->
                        <!--Header Menu Start--> */}
                        <div className="col-lg-7  d-none d-lg-block text-end"> 
                            <div className="header-menu-area">
                                <nav>
                                    <ul className="main-menu">
                                        <li className="active"><a href="index.html">HOME</a>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><a href="index.html">Home Page 1</a></li>
                                                <li><a href="index-2.html">Home Page 2</a></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><a href="causes.html">CAUSES</a>
                                           {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><a href="single-causes.html">Causes Details</a></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End-->  */}
                                        </li>
                                        <li><a href="event.html">EVENTS</a>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><a href="event-three-column.html">Event Three Column</a></li>
                                                <li><a href="event-details.html">Event Details</a></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><a href="blog.html">BLOG</a>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single-blog.html">Blog details</a></li>
                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><a href="shop.html">SHOP</a>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><a href="#">PAGES</a>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="volunteer.html">Volunteer</a></li>
                                                <li><a href="volunteer-details.html">Volunteer Details</a></li>
                                                <li><a href="become-volunteer.html">Become Volunteer</a></li>
                                                <li><a href="gallery.html">Gallery</a></li>
                                                <li><a href="gallery-filtering.html">Gallery Filtering</a></li>
                                                <li><a href="gallery-full-width.html">Gallery Full Width</a></li>
                                                <li><a href="gallery-masonry.html">Gallery Masonry</a></li>
                                                <li><a href="donet.html">Donet</a></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><a href="contact.html">CONTACT</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* <!--Header Menu End-->
                        <!--Book Now Area Start--> */}
                        <div className="col-lg-2 col-md-6">
                            <div className="book-now-btn text-end">
                                <a href="#">DONATE</a>
                            </div>
                        </div>
                        {/* <!--Book Now Area Start--> */}
		            </div>
		            <div className="row">
                        <div className="col-12">  
                            {/* <!--Mobile Menu Area Start--> */}
                            <div className="mobile-menu d-lg-none d-xl-none"></div>
                            {/* <!--Mobile Menu Area End--> */}
                        </div>
                    </div>
		        </div>
		    </div>
		    {/* <!--Default Header Area End--> */}
		</header>
    </> );
}
 
