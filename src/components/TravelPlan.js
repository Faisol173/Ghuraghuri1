import React from 'react'
import Hero from './Hero'
import AboutImg from "../assets/night.jpg"
import Navbar from './Navbar'
import './travelPlan.css'
import { NavLink } from 'react-router-dom'

export default function TravelPlan(props) {
  // const card=[{title:"pakage 1",destination:"sujek",time:"2 days 3 night",hotel:"premimum hotel"},
  // {title:"pakage 1",destination:"sujek",time:"2 days 3 night",hotel:"premimum hotel"},
  // {title:"pakage 1",destination:"sujek",time:"2 days 3 night",hotel:"premimum hotel"}]
  return (
      <div>
        <Navbar/>
        <div className='cardHolder'>
          {props.card.map((card) => { return <div key={card}>
            <div className='card'>
             <div className='travelCard'>
              <h2>{card.title}</h2>
              <h3>{card.destination}</h3>
              <p>{card.time}</p>
              <p>{card.hotel}</p>
              <NavLink to="/travelplan/details"> <button>Details</button></NavLink>
             
             </div>
             </div>
            </div>})}
        </div>
      </div>
  )
}
