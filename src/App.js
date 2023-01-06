// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './routes/Home';
import Service from './routes/Services';
import About from './routes/About';
import Contact from './routes/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TravelPlan from './components/TravelPlan';
import TravelPlanDetails from './components/TravelPlanDetails';
import Card from './Helper/Card';
import TravelPlanDetailsCard from './components/TravelDetailsCard';

function App() {
  // travel details

  const card=[
    {title:"pakage 1",destination:"Saint Martin",time:"From 19 jan TO 23 jan",hotel:"Event FEE:3950",details:"ভ্রমণের জন্য যে কেও আমাদের সাথে যোগাযোগ করতে ছেলে মেয়ে পরিবার সকলেই যেতে পারবে।"},

  {title:"pakage 2",destination:"Sajek Vally",time:"2 days 3 night",hotel:"premimum hotel",details:"faisol"},
  {title:"pakage 3",destination:"s",time:"2 days 3 night",hotel:"premimum hotel",details:"ঘুরে আসুন সাদা পাথর ভোলাগঞ্জ, রাতারগুল সোয়াম্প ফরেস্ট, জাফলং, রাতারগুল, চা বাগান ও মাজারসহ অনেক গুলো জায়গা।"}]
  



  //returnn function
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/travelPlan" element={<TravelPlan card={card}/>}/>
        <Route path="/travelPlan/details" element={<TravelPlanDetailsCard/>}/>
      </Routes>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
