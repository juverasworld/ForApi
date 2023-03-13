import Image from 'next/image'
export default function Anything() {
    return (
        <section>
	<div className="our-causes-area pt-115">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* <!--Section Title Start--> */}
							<div className="section-title mb-60">
								<h2>Our Causes</h2>
								<p>Pursue pleasure rationally encounter consequences that extremely painful. Nor again is there anyone who loves or pursues </p>
							</div>
							{/* <!--Section Title End--> */}
						</div>
					</div>
					<div className="row">
						{/* <!--Single Causes Area Start--> */}
						<div className="col-lg-6 col-xl-3 col-md-6">
							<div className="single-causes-area mb-30">
								<div className="causes-feature">
									<ul>
										<li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
										<li><span className="content">Achive</span> <span className="per-count">50.5%</span></li>
										<li><span className="content">Goal</span> <span className="per-count">$18,000</span></li>
									</ul>
								</div>
								<div className="causes-img img-full">
									<a href="single-causes.html">
										<Image src="/img/causes/causes1.jpg" alt="causes" width={100} height={100} /></a>
								</div>
								<div className="casues-content">
									<h3><a href="single-causes.html">Education.</a></h3>
									<p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
								</div>
							</div>
						</div>
						{/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
						<div className="col-lg-6 col-xl-3 col-md-6">
							<div className="single-causes-area mb-30">
								<div className="causes-feature">
									<ul>
										<li><span className="content">Raised</span> <span className="per-count">$8,500</span></li>
										<li><span className="content">Achive</span> <span className="per-count">141.23%</span></li>
										<li><span className="content">Goal</span> <span className="per-count">$12,000</span></li>
									</ul>
								</div>
								<div className="causes-img img-full">
									<a href="single-causes.html"><Image src="/img/causes/causes2.jpg" alt="" width={100} height={100} /></a>
								</div>
								<div className="casues-content">
									<h3><a href="single-causes.html">Green World.</a></h3>
									<p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
								</div>
							</div>
						</div>
						{/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
						<div className="col-lg-6 col-xl-3 col-md-6">
							<div className="single-causes-area mb-30">
								<div className="causes-feature">
									<ul>
										<li><span className="content">Raised</span> <span className="per-count">$15,000</span></li>
										<li><span className="content">Achive</span> <span className="per-count">83.33%</span></li>
										<li><span className="content">Goal</span> <span className="per-count">$18,000</span></li>
									</ul>
								</div>
								<div className="causes-img img-full">
									<a href="single-causes.html">
										<Image src="/img/causes/causes3.jpg" alt="" width={100} height={100} /></a>
								</div>
								<div className="casues-content">
									<h3><a href="single-causes.html">Accomodation.</a></h3>
									<p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
								</div>
							</div>
						</div>
						{/* <!--Single Causes Area End-->
		            <!--Single Causes Area Start--> */}
						<div className="col-lg-6 col-xl-3 col-md-6">
							<div className="single-causes-area mb-30">
								<div className="causes-feature">
									<ul>
										<li><span className="content">Raised</span> <span className="per-count">$10,000</span></li>
										<li><span className="content">Achive</span> <span className="per-count">100%</span></li>
										<li><span className="content">Goal</span> <span className="per-count">$10,000</span></li>
									</ul>
								</div>
								<div className="causes-img img-full">
									<a href="single-causes.html"><Image src="/img/causes/causes4.jpg" alt="" height={100} width={100} /></a>
								</div>
								<div className="casues-content">
									<h3><a href="single-causes.html">Food.</a></h3>
									<p>Pursue pleasure rationally unter consequences that are tremely painful. Nor again is here</p>
								</div>
							</div>
						</div>
						{/* <!--Single Causes Area End--> */}
					</div>
				</div>
			</div>
        </section>
    )
}

// $('.brand-active').owlCarousel({
// 	smartSpeed: 1000,
// 	nav: true,
// 	navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
// 	responsive: {
// 		0: {
// 			items: 2
// 		},
// 		450: {
// 			items: 3
// 		},
// 		768: {
// 			items: 4
// 		},
// 		1000: {
// 			items: 5
// 		},
// 		1200: {
// 			items: 5
// 		}
// 	}
// }) 