import Head from 'next/head'
import Image from 'next/image'


import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from 'next/link'
// import Hamburger from './Hamburger';


export default function Header({ showMobileNav, setShowMobileNav }) {

    return (

        <div className="row">
                        <div className="col-12">
                            {/* <!--Mobile Menu Area Start--> */}
                            <div className="mobile-menu ">
                            <div >
                        {/* <Switch/> */}
                        <div className={`menu-bar ${showMobileNav && 'animate'}`} onClick={() => setShowMobileNav((val: any) => !val)}>
                            <div className="one">-</div>
                            <div className="two">-</div>
                            <div className="three">-</div>
                        </div>
                    </div>   
                            </div>
                            {/* <!--Mobile Menu Area End--> */}
                        </div>
                    </div>

    )
}