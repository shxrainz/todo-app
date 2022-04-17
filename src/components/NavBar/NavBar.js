import React from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <>
            <nav className='navbar'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink exact to="/" className='nav-links'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to="/list" className='nav-links'>
                            Todo List
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to="/about" className='nav-links'>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar