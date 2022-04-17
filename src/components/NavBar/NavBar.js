import React, { useState } from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { RiCloseCircleLine } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa'

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>
            <nav className='navbar'>
                {/* <div className='nav-container'>
                    <NavLink exact to="/" activeClassName='active' className='nav-logo'>
                        Todo App
                    </NavLink>
                </div> */}
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink exact to="/" activeClassName='active' className='nav-links'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to="/list" activeClassName='active' className='nav-links'>
                            Todo List
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to="/about" activeClassName='active' className='nav-links'>
                            About
                        </NavLink>
                    </li>
                </ul>
                {/* <div className='nav-icon' onClick={handleClick}>
                    {click ?
                        <RiCloseCircleLine />
                        :
                        <FaBars />
                    }
                </div> */}
            </nav>
        </>
    )
}

export default NavBar