import React from 'react'
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero 
            cName="hero"
            heroImg="../../assets/cox.jpg"
            title="Your Jounery Your Story"
            text="Choose Your Favourite Destination."
            btnText="Travel Plan"
            url="/"
            btnClass="show"
        />
        <Destination/>

        <Trip/>

        <Footer/>
    </>
  )
}
