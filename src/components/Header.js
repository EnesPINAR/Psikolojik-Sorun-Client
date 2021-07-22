import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

const Header = () => {

    const [openMobileNav, setOpenMobileNav] = useState(false)

    if (openMobileNav) {
        return (
            <nav className="mobileNav">
                <ul>
                    <li>
                        <button className="closeButton">
                            <img src="img/closeIcon.svg" alt="Close" onClick={() => {
                                setOpenMobileNav(false)
                            }} />
                        </button>
                    </li>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Appointments">Appointments</Link>
                    </li>
                    <li>
                        <Link to="/Help">Help</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            <button className="btnType1">
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Register">
                            <button className="btnType2">
                                Register
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
                <header>
                    <div className="logoAndName">
                        <img src="img/PSLOGO.svg" alt="PSLOGO" />
                        <h1>PSİKOLOJİK SORUN</h1>
                        <button className="navButton" onClick={() => {
                            setOpenMobileNav(true)
                        }}>
                            <img src="img/navIcon.svg" alt="Navbar" />
                        </button>
                    </div>
                    <nav className="desktopNav">
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/Appointments">Appointments</Link>
                            </li>
                            <li>
                                <Link to="/Help">Help</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Login">
                                    <button className="btnType1">
                                        Login
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Register">
                                    <button className="btnType2">
                                        Register
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
        )
    }

}

export default Header;