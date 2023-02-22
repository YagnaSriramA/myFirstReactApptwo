import React from "react"
import logo from './download.svg';


function Header() {
    return(
        <header>
            <nav className="bar">
                <img src={logo} className="logoo" alt="logo"></img>
                <ul className="bar-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
  }


export default Header