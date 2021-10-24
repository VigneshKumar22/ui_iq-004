import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img src={process.env.PUBLIC_URL + "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-where-buy-rain-design-30.png"}
        height="30"
        width="55"
        alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/Store' activeStyle>
            Store
          </NavLink>
          <NavLink to='/mac' activeStyle>
            Mac
          </NavLink>
          <NavLink to='/ipad' activeStyle>
            iPad
          </NavLink>
          <NavLink to='/iphone' activeStyle>
            iPhone
          </NavLink>
          <NavLink to='/watch' activeStyle>
            Watch
          </NavLink>
          <NavLink to='/airpods' activeStyle>
            AirPods
          </NavLink>
          <NavLink to='/Tvhome' activeStyle>
            Tv & Home
          </NavLink>
          <NavLink to='/online' activeStyle>
            Only on Apple
          </NavLink>
          <NavLink to='/accessories' activeStyle>
            Accessories
          </NavLink>
          <NavLink to='/support' activeStyle>
            Support
          </NavLink>
          

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Buy</NavBtnLink>
        </NavBtn>
      </Nav>
        
    </>
  );
};

export default Navbar;
