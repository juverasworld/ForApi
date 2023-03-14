import Head from 'next/head'
import Image from 'next/image'


import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from 'next/link'
// import Hamburger from './Hamburger';


export default function Header({
    children,
    home
}: {
    children?: React.ReactNode
    home?: boolean
}) {
    return (
        <header>
            {/* <!--Default Header Area Start--> */}
            <div className="default-header-area header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!--Header Logo Start--> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo">
                                {/*<img src="img/logo/logo.png" alt="">  */}
                                <Link href="/"><Image src="/img/logo/logo.png" alt="" width={80} height={50} /></Link>
                            </div>
                        </div>
                        {/* <!--Header Logo End-->
                        <!--Header Menu Start--> */}
                        <div className="col-lg-7  d-none d-lg-block text-end">
                            <div className="header-menu-area">
                                <nav>
                                    <ul className="mainMenu">
                                        <li className="active"><Link href="/">HOME</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                           
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="/Causes">ABOUT</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="/Single-causes">Our Team</Link></li>
                                            </ul>
                                            <ul>
                                                <li><Link href="/Single-causes">Hubs</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End-->  */}
                                        </li>
                                        <li><Link href="/Event">EVENTS</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="/Event-details">Event Details</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="/Blog">BLOG</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="/Blog">Blog</Link></li>
                                                <li><Link href="/Single-blog">Blog details</Link></li>
                                                <li><Link href="/Blog-right-side">Blog Right Sidebar</Link></li>
                                                <li><Link href="/Blog-left-side">Blog Left Sidebar</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="/Shop">SHOP</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="/Single-product">Single Product</Link></li>
                                                <li><Link href="/Cart">Shopping Cart</Link></li>
                                                <li><Link href="/Wishlist">Wishlist</Link></li>
                                                <li><Link href="/Checkout">checkout</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="#">MEDIA GALLERY</Link>
                                            {/* <!--Dropdown Menu Start--> */}
                                            <ul>
                                                <li><Link href="/About">About</Link></li>
                                                <li><Link href="/Volunteer">Volunteer</Link></li>
                                                <li><Link href="/Volunteer-detail">Volunteer Details</Link></li>
                                                <li><Link href="/Become-volunteer">Become Volunteer</Link></li>
                                                <li><Link href="/Gallery">Gallery</Link></li>
                                                <li><Link href="/Gallery-filtering">Gallery Filtering</Link></li>
                                                <li><Link href="/Gallery-full-width">Gallery Full Width</Link></li>
                                                <li><Link href="/Gallery-masonry">Gallery Masonry</Link></li>
                                                <li><Link href="/Donet">Donet</Link></li>
                                            </ul>
                                            {/* <!--Dropdown Menu End--> */}
                                        </li>
                                        <li><Link href="/Contact">CONTACT</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* <!--Header Menu End-->
                        <!--Book Now Area Start--> */}
                        <div className="col-lg-2 col-md-6">
                            <div className="book-now-btn text-end">
                                <Link href="/Donet">DONATE</Link>
                            </div>
                        </div>
                        {/* <!--Book Now Area Start--> */}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* <!--Mobile Menu Area Start--> */}
                            <div className="mobile-menu d-lg-none d-xl-none">
                                
                            </div>
                            {/* <!--Mobile Menu Area End--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Default Header Area End--> */}
        </header>
    )
}