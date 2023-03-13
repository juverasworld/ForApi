import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
export default function galleryMasonry() {
    return (
        <>
            <section className="wrapper">
                <Header />
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h1 className="breadmome-name">Gallery Full Width</h1>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li className="active">Gallery Full Width</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-area pt-95 pb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="hp__portfolio__area gallery__masonry__activation ptb--110 text-center">
                                    <div className="gallery__menu">
                                        <button data-filter="*" className="is-checked">ALL</button>
                                        <button data-filter=".cat--1" className="">Brand</button>
                                        <button data-filter=".cat--2" className="">Design</button>
                                        <button data-filter=".cat--3" className="">Graphic</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row masonry__wrap">
                            {/* <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--1">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery1.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery1.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--2">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery2.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery2.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--2">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery3.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery3.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery4.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery4.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--2">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery2.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery5.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--2">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery3.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery6.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery4.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery7.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery5.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery8.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery6.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery9.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--2 cat--1">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery7.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery10.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--2">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery8.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery11.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--1">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery9.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery12.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery6.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery14.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--2 cat--1">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery7.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery15.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--2">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery8.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery17.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End-->
                    <!--Single Gallery Image Start--> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 gallery__item cat--3 cat--1">
                                <div className="single-gallery-img mb-30">
                                    <Link href="img/gallery/gallery9.jpg" data-fancybox="gallery"><Image src="/img/gallery/gallery16.jpg" alt="" width={200} height={100} /></Link>
                                </div>
                            </div>
                            {/* <!--Single Gallery Image End--> */}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* <!--See More Button Start--> */}
                                <div className="see-more-btn">
                                    <Link href="#">see more</Link>
                                </div>
                                {/* <!--See More Button End--> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </section>
        </>
    )
}