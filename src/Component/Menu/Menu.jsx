import React from 'react'
import "./Menu.css"
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";

const Menu = () => {
  return (
    <>
    <div className='navbarPart'>
    <div className="container">
        <div className="menuWrapper">
            <div className="nav__logo">
                <picture>
                    <img src={logo} alt={logo} />
                </picture>
            </div>
            <div className="menuWrapperItems">
                <ul className='menuLIstItems'> 
                    <li className='menuItems'>
                        <a href="#">Services</a>
                    </li>
                    <li className='menuItems'>
                        <a href="#">Industries</a>
                    </li>
                    <li className='menuItems'>
                        <a href="#">About Us</a>
                    </li>
                    <li className='menuItems'>
                        <a href="#">Team Lunar</a>
                    </li>
                    <li className='menuItems'>
                        <a href="#">Blog <FaAngleDown /> </a>
                    </li>
                    <li className='menuBtn'>
                        <a href="#"> <button className='btn'>Contact us</button> </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Menu