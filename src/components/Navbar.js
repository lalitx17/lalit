import React from "react";


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
            <a className="nav__link" href="/">
              HOME
            </a>
          </li>
          <li className="menu-item dropdown">
          <a className="nav__link" href="/projects">
              PROJECTS
            </a>
          </li>
          <li className="menu-item dropdown">
          <a className="nav__link" href="/experience">
              EXPERIENCE
            </a>
          </li>
          <li className="menu-item ">
          <a className="nav__link" href="/about">
              ABOUT
            </a>
          </li>
          <li className="menu-item ">
          <a className="nav__link" href="/contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
