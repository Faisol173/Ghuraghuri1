import React from 'react'
import Hero from './Hero'
import AboutImg from "../assets/night.jpg"
import Navbar from './Navbar'
import './travelPlan.css'
import { NavLink } from 'react-router-dom';
import TravelDetailsCard from './TravelDetailsCard'

export default function TravelPlanDetails() {
  const card=[
    {title:"pakage 1",destination:"Saint Martin",time:"From 19 jan TO 23 jan",hotel:"Event FEE:3950",details:"ভ্রমণের জন্য যে কেও আমাদের সাথে যোগাযোগ করতে ছেলে মেয়ে পরিবার সকলেই যেতে পারবে।"},

  {title:"pakage 2",destination:"Sajek Vally",time:"2 days 3 night",hotel:"premimum hotel",details:"faisol"},
  {title:"pakage 3",destination:"s",time:"2 days 3 night",hotel:"premimum hotel",details:"ঘুরে আসুন সাদা পাথর ভোলাগঞ্জ, রাতারগুল সোয়াম্প ফরেস্ট, জাফলং, রাতারগুল, চা বাগান ও মাজারসহ অনেক গুলো জায়গা।"}
]
  

  return (
      <div>
        <Navbar/>
        <TravelDetailsCard card={card} e="hello"/>
      </div>
  )
}
