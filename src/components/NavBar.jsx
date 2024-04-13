import React, { useEffect } from 'react'
import "./NavBarStyles.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'
import blacklogo from '../assets/blacklogo.png'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)

    const handleClick = () => setClick(!click)

    const handleColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleColor)

        return () => {
            window.removeEventListener('scroll', handleColor)
        }
    }, [])

    return (
        <div className={color ? "header header-bg" : "header"} >
            <Link to="/">
                <img src={blacklogo} alt="Rhyno EV" className={click ? ('hidden-logo'):('visible-logo')}/>
            </Link>
            <ul className={click ? ('nav-menu active') : ('nav-menu')}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={25} style={{ color: "white !important" }} />) : (
                    <FaBars size={25} style={{ color: "black" }} />)}
            </div>
        </div>
    )
}

export default NavBar