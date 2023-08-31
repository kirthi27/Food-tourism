import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div className='navbar1'>
      <div className='nav-links'><h3>TAMILNADU TOURISM</h3></div>
      <div>      
        
        <ul className='links'>
        <Link to="/Home" className='Home'> <li>HOME</li> </Link>&nbsp;
        <Link to="/places" className='places'> <li> PLACE TO VISIT</li></Link>&nbsp;
        <Link to="/Bestplace" className='Bestplace'><li>BEST TIME TO VISIT</li></Link>&nbsp;
        <Link to="#" className='besttime'><li>PACKAGES</li></Link>&nbsp;
        <Link to="#" className='besttime'><li>DESTINATION</li></Link>&nbsp;
        <Link to="/food" className='food'><li>FOOD</li></Link>
        </ul>
     </div>
    </div>
      
  )
}

export default navbar
