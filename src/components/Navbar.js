import React from 'react';
import { FaCartArrowDown, FaUser, FaUpload } from "react-icons/fa";
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <nav>
            <ul className="right-nav">
                <Link to ='/add'><FaUpload style={{width: 22, height: 22, color: '#009ffd', marginRight: 16, marginTop: -2}}/></Link>
                <Link to='/cart'><FaCartArrowDown style={{width: 22, height: 22, color: '#D20A2C', marginTop: -3, marginRight: 15}}/></Link>
                <FaUser style={{width: 20, height: 20, color: '#D20A2C', marginTop: -3}}/>
                
            </ul>
            <ul className="left-nav" >
                <Link to='/'><li><img src={logo} alt=""></img></li></Link>
                <span className="line"></span>
                <a href='/products/smartphones'><li>SmartPhones</li></a>
                <a href='/products/tablets'><li>Tablets</li></a>
                <a href='/products/wearables'><li>Wearables</li></a>
                <a href='/products/accessories'><li>Accessories</li></a>

            </ul>
        </nav>
    );
}
 
export default Navbar;