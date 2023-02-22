import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbarx">
      <div className="lalit-logo">
        <img className="lalit-img" src={process.env.PUBLIC_URL + "/images/logox.png"} width={'250px'} height={'150px'}  alt="LOGO" />
      </div>
      <div className="push-left">
        <button
          id="menu-toggler"
          data-class="menu-active"
          className="hamburgerx"
        >
          <span className="hamburger-line hamburger-line-top"></span>
          <span className="hamburger-line hamburger-line-middle"></span>
          <span className="hamburger-line hamburger-line-bottom"></span>
        </button>

        <ul id="primary-menu" className="menu nav-menu">
          <li className="menu-item current-menu-item">
            <Link className="nav__link" to="/">
              HOME
            </Link>
          </li>
          <li className="menu-item dropdown">
          <Link className="nav__link" to="/projects">
              PROJECTS
            </Link>
          </li>
          {/* <li className="menu-item dropdown">
          <a className="nav__link" href="/experience">
              EXPERIENCE
            </a>
          </li> */}
          <li className="menu-item ">
          <Link className="nav__link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="menu-item ">
          <Link className="nav__link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
