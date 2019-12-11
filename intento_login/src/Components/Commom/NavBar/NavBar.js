import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { IoIosLogIn, IoIosHome, IoIosKey } from 'react-icons/io';

const NavItem =({to, children, ...rest})=>{
  return(
    <Link to={to} >{children}</Link>
  );
}

export default ()=>{
  return(
    <nav>
      <NavItem to="/Home"><IoIosLogIn/>&nbsp;Home</NavItem>
      <NavItem to="/Login"><IoIosLogIn/>&nbsp;Login</NavItem>
      <NavItem to="/Dashboard" ><IoIosHome/>&nbsp;Cartelera</NavItem>
    </nav>
  );
}
