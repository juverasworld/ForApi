import Image from "next/image"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Anotherhero from "../components/Anotherhero";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";

import Link from 'next/link'



export default function SecondHome({
    allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
    return ( <>
        <Header2/>
        {/* <Anotherhero/> */}
        <Footer/>
    
        </> );
    }