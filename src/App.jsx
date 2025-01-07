import React from 'react'
import Navbar from './components/Client/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Client/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
