import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    //NavBtn,
    //NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Todo App
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/list" 
                  activeStyle={{ color: 'black' }}
                >
                    Todo List
                </NavLink>
                <NavLink 
                  to="/about" 
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;