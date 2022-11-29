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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
