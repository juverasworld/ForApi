import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react';
// import Image from 'next/image';

export default function Hero() {
	const body = document.querySelector('body');

	function animateSlider() {
		body.classList.add('animating'); // add animating class to body element
		// perform slider animation
		setTimeout(() => {
			body.classList.remove('animating'); // remove animating class from body element
		}, 700); // set timeout to match the duration of your slider animation
	}
	const [index, setIndex] = useState(0);
	const [currentText, setCurrentText] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentText(txt => {
				if (txt === 1)
					return 0
				else return txt + 1
			})
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (

		<section>
			<div className="slider-area">
				<div className="hero-slider">


					
						<div className='body' >
							<span className={`slide single-slider ${currentText === 0 ? 'animate' : 'un-animate'}`} style={{ backgroundImage: 'url(/img/slider/slide2-home-1.jpg)', width: "100%" }}>

								<div className="container">
									<div className="row">
										<div className="col-12">
											<div className="hero-slider-content">
												<h1>Small help together makes better life</h1>
												<div className="slider-btn">
													<a className="default-btn" href="#">READ MORE</a>
												</div>
											</div>
										</div>
									</div>
								</div>


							</span>
						</div>
						<div className="body">
							<span className={`slide ${currentText === 1 ? 'animate' : 'un-animate'}`} style={{ backgroundImage: 'url(img/slider/slide1-home-1.jpg)', width: "100%" }}>
								<div className="container">
									<div className="row">
										<div className="col-12">
											<div className="hero-slider-content">
												<h1>Let s teach them letter, the world will be better</h1>
												<div className="slider-btn">
													<a className="default-btn" href="#">READ MORE</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</span>
						</div>
						{/* <span className={`slide ${currentText === 2 ? 'animate' : 'un-animate'}`}>run Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sit exercitationem ipsa quia libero qui magni minima quas non suscipit id officia nobis, nemo nostrum consequatur quaerat deserunt at? Alias!</span> */}
				

					{/* <!--Single Slider Start--> */}
					{/* <div className="single-slider" style={{ backgroundImage: 'url(/img/slider/slide2-home-1.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="hero-slider-content">
										<h1>Small help together makes better life</h1>
										<div className="slider-btn">
											<a className="default-btn" href="#">READ MORE</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/* <!--Single Slider End-->
		        <!--Single Slider Start--> */}
					{/* <div className="single-slider" style={{ backgroundImage: 'url(img/slider/slide1-home-1.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="hero-slider-content">
										<h1>Let s teach them letter, the world will be better</h1>
										<div className="slider-btn">
											<a className="default-btn" href="#">READ MORE</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/* <!--Single Slider End--> */}
				</div>
			</div>
			<div className="feature-area fix mb-10">
				<div className="container-fluid p-0">
					<div className="row coustom-row">
						<div className="single-feature col-md-4">
							{/* <!--Single Feature Area Start--> */}
							<div className="single-feature-inner">
								<h2>Get our Promortional <span className="text-underline">Products</span> and help the humaity</h2>
							</div>
							{/* <!--Single Feature Area End--> */}
						</div>
						<div className="single-feature col-md-4">
							{/* <!--Single Feature Area Start--> */}
							<div className="single-feature-inner">
								<h2>Our Upcomming <span className="text-underline">Events Date</span>: 3rd October, 2018 <span className="text-underline">Venu</span>: Romance Hall</h2>
							</div>
							{/* <!--Single Feature Area End--> */}
						</div>
						<div className="single-feature col-md-4">
							{/* <!--Single Feature Area Start--> */}
							<div className="single-feature-inner">
								<h2>Our Latest <span className="text-underline">Achivement Fund’s</span> $3,85,65,250 <span className="text-underline">Member’s</span> 50,000</h2>
							</div>
							{/* <!--Single Feature Area End--> */}
						</div>
					</div>
				</div>
			</div>
			<div className="service-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="row">
								<div className="col-12">
									<div className="service-section-title mb-40">
										<h2>What we do</h2>
										<h3>Always try to do better for humanity</h3>
										<p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally </p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									{/* <!--Single Service Start--> */}
									<div className="single-service mb-30">
										<h2 className="service-title">Make Donation</h2>
										<p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
									</div>
									{/* <!--Single Service End--> */}
								</div>
								<div className="col-md-6">
									{/* <!--Single Service Start--> */}
									<div className="single-service mb-30">
										<h2 className="service-title">Give Scholarship</h2>
										<p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
									</div>
									{/* <!--Single Service End--> */}
								</div>
								<div className="col-md-6">
									{/* <!--Single Service Start--> */}
									<div className="single-service mb-30">
										<h2 className="service-title">Become a Volunteer</h2>
										<p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
									</div>
									{/* <!--Single Service End--> */}
								</div>
								<div className="col-md-6">
									{/* <!--Single Service Start--> */}
									<div className="single-service mb-30">
										<h2 className="service-title">Organize Entertainment</h2>
										<p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
									</div>
									{/* <!--Single Service End--> */}
								</div>
								<div className="col-md-6">
									{/* <!--Single Service Start--> */}
									<div className="single-service mb-30">
										<h2 className="service-title">Food & Water Supply</h2>
										<p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
									</div>
									{/* <!--Single Service End--> */}
								</div>
								<div className="col-md-6">
									{/* <!--Single Service Start--> */}
									<div className="single-service mb-30">
										<h2 className="service-title">Protect Environment</h2>
										<p>Pursue pleasure rationally counter consequences that are extremely painful. Nor again is here</p>
									</div>
									{/* <!--Single Service End--> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="service-image">

					<Image
						src="/img/service/service1.png" alt="service-image" width={100} height={100}
					/>
				</div>
			</div>

			<div className="donate-product-area pt-60">
				<div className="container coustom-container">
					<div className="row coustom-row-two">
						<div className="col-lg-5 col-xl-6 col-50">
							<div className="donation-image">
								<Image src="/img/donate/donrt1.png" alt="" width={144} height={144} />
							</div>
						</div>
						<div className="col-lg-7 col-xl-6 col-70">
							<div className="donet-product">
								<div className="row">
									<div className="col-md-4">
										<div className="donet-shop">
											<h2>Adopt a <br /> School</h2>
											<p>Pursue pleasure rationally encounter consequences that extremely pain again</p>
											<a href="#">SHOP NOW</a>
										</div>
									</div>
									<div className="col-md-4">
										<div className="single-donet-product">
											<Image src="/img/donate/donet-product1.png" alt="" width={144} height={144} />
										</div>
									</div>
									<div className="col-md-4">
										<div className="single-donet-product">
											<Image src="/img/donate/donet-product2.png" alt="" width={144} height={144} />
										</div>
									</div>
									<div className="col-md-4">
										<div className="single-donet-product">
											<Image src="/img/donate/donet-product3.png" alt="" width={144} height={144} />
										</div>
									</div>
									<div className="col-md-4">
										<div className="single-donet-product">
											<Image src="/img/donate/donet-product4.png" alt="" width={144} height={144} />
										</div>
									</div>
									<div className="col-md-4">
										<div className="single-donet-product">
											<Image src="/img/donate/donet-product5.png" alt="" width={144} height={144} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="event-area pt-70">
				<div className="container">
					<div className="row align-items-center">
						{/* <!--Event Slider Start--> */}
						<div className="col-lg-6 col-12">
							<div className="event-slider">
								{/* <!--Single Event Start--> */}
								<div className="single-event">
									<div className="event-img img-full">
										<Image src="/img/event/event1.jpg" alt="" width={200} height={200} />
									</div>
									<div className="event-content">
										<h3><a href="event-details.html">Medical Camp for Poor Children</a></h3>
										<p>Central Hall, California.  25 Oct, 2018  at 10 am</p>
									</div>
								</div>
								{/* <!--Single Event End-->
		                    <!--Single Event Start--> */}
								<div className="single-event">
									<div className="event-img img-full">
										<Image src="/img/event/event2.jpg" alt="" width={200} height={200} />
									</div>
									<div className="event-content">
										<h3><a href="event-details.html">Pure Drinking Water for helpless people</a></h3>
										<p>Midland Cricket Ground.  25 Oct, 2018  at 10 am</p>
									</div>
								</div>
								{/* <!--Single Event End-->
		                    <!--Single Event Start--> */}
								<div className="single-event">
									<div className="event-img img-full">
										<Image src="/img/event/event3.jpg" alt="" width={200} height={200} />
									</div>
									<div className="event-content">
										<h3><a href="event-details.html">Medical Camp for Poor Children</a></h3>
										<p>Central Hall, California.  25 Oct, 2018  at 10 am</p>
									</div>
								</div>
								{/* <!--Single Event End-->
		                    <!--Single Event Start--> */}
								<div className="single-event">
									<div className="event-img img-full">
										<Image src="/img/event/event4.jpg" alt="" width={200} height={200} />
									</div>
									<div className="event-content">
										<h3><a href="event-details.html">Pure Drinking Water for helpless people</a></h3>
										<p>Midland Cricket Ground.  25 Oct, 2018  at 10 am</p>
									</div>
								</div>
								{/* <!--Single Event End-->
		                    <!--Single Event Start--> */}
								<div className="single-event">
									<div className="event-img img-full">
										<Image src="/img/event/event5.jpg" alt="" width={200} height={200} />
									</div>
									<div className="event-content">
										<h3>Medical Camp for Poor Children</h3>
										<p>Central Hall, California.  25 Oct, 2018  at 10 am</p>
									</div>
								</div>
								{/* <!--Single Event End--> */}
							</div>
						</div>
						{/* <!--Event Slider End-->
		            <!--Event Description Start--> */}
						<div className="col-lg-6 col-12 pl-60">
							{/* <!--Section Title Start--> */}
							<div className="section-title text-left">
								<h2>Our Projects</h2>
							</div>
							{/* <!--Section Title End--> */}
							<div className="event-description">
								<h4>You can know about our latest and upcoming events information clearly...</h4>
								<p>Pursue pleasure rationally encounter consequences that treme painful. Nor again is there anyone  obtain pain of itself, because it is pain, but because occasionally circumstances occue</p>
								<p>Events are pleasure rationally encounter consequences that treme painful. Nor again is there anyone  obtain pain </p>
								<a className="default-btn" href="#">KNOW MORE</a>
							</div>
						</div>
						{/* <!--Event Description Start--> */}
					</div>
				</div>
			</div>
			<div className="fun-factor-area fun-bg mt-100">
				<div className="container">
					<div className="row justify-content-between content-between">
						<div className="col">
							<div className="single-funfactor mb-30 text-center">
								<div className="fun-facttor-number">
									<h2><span className="counter">1280</span></h2>
								</div>
								<h4 className="counter-title">Successful Projects</h4>
							</div>
						</div>
						<div className="col">
							<div className="single-funfactor mb-30 text-center">
								<div className="fun-facttor-number">
									<h2><span className="counter">1052</span></h2>
								</div>
								<h4 className="counter-title">Total Sponsor</h4>
							</div>
						</div>
						<div className="col">
							<div className="single-funfactor mb-30 text-center">
								<div className="fun-facttor-number">
									<h2>$<span className="counter">280</span>m</h2>
								</div>
								<h4 className="counter-title">Money Donated</h4>
							</div>
						</div>
						<div className="col">
							<div className="single-funfactor mb-30 text-center">
								<div className="fun-facttor-number">
									<h2><span className="counter">3298</span></h2>
								</div>
								<h4 className="counter-title">Total Volunteers</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >


	)
}
