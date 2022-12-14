import React from 'react'
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';
import cox from "../assets/cox.jpg"

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero 
            cName="hero"
            heroImg={cox}
            title="Your Jounery Your Story"
            text="Choose Your Favourite Destination."
            btnText="Travel Plan"
            url="/travelPlan"
            btnClass="show"
        />
        {/* <Destination/>

        <Trip/> */}

        <Footer/>
    </>
  )
}
