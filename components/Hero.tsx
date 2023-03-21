import { url } from 'inspector';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from "react"
export default function Hero() {
	const [currentText, setCurrentText] = useState(0)

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
		<section className='' >
			<div style={{ height:"100%"}}>
				<span className={`slide single-slider ${currentText === 0 ? 'animate' : 'un-animate'}`} style={{  backgroundImage: "url(/img/slider/slide2-home-1.jpg)" }}>Lorem
				</span>
				<span className={`slide single-slider ${currentText === 1 ? 'animate' : 'un-animate'}`} style={{  backgroundImage: "url(/img/slider/slide1-home-1.jpg)" }}>Lorem
				</span>
				{/* <span className={`slide ${currentText === 1 ? 'animate' : 'un-animate'}`}>jog</span>
				<span className={`slide ${currentText === 2 ? 'animate' : 'un-animate'}`}>run</span> */}
			</div>
			{/* 			
			<div className='' >
				<span className={`slide ${currentImage === 0 ? 'animate' : 'un-animate'}`} style={{ backgroundImage: "url(/img/slider/slide2-home-1.jpg)" }}>Lorem
				</span>

				<span className={`slide single-slider  ${currentImage === 1 ? 'animate' : 'un-animate'}`} style={{ backgroundImage: "url(/img/slider/slide1-home-1.jpg)" }}>Lorem
				</span>
			</div> */}
		</section>
	)
}