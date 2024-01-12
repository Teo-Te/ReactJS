import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        
        <div className="Navbar">
             <ul>
                <Link to="/Home">
                    <li>Home</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
                <Link to="/Services">
                    <li>Services</li>
                </Link>
           </ul>
          
        </div>

    )
}
export default Navbar;