import React from 'react'
import './Navbar.css'
import logo from '../../assets/navbarlogo/logo.svg'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mt-3">
                <div className="container">
                <a href="#" className="navbar-brand"><img src={logo} alt='no connection'></img>
                </a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                              <span className="navbar-toggler-icon"></span>
                          </button>


                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#Pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Testimonials" className="nav-link">Testimonials</a>
                        </li>
                        <a href="#" className="nav-link sign-in"><b>Sign In</b></a>
                        <button className="nav-item-button">Sign Up</button>
                    </ul>
                </div>
                </div>
              
            </nav>
        </div>
    )
}

export default Navbar
