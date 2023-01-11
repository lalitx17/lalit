import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <div className="navbar-brand lalit-logo-div">
        <img
         src={process.env.PUBLIC_URL + '/images/logox.png'}
          className="d-inline-block align-baseline lalit-logo"
          alt=""
        />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <ul className="navbar-nav mr-auto top titlebox">
          <li className="mx-4 nav-item active">
            <Link className="nav-link text-white" to="/">HOME</Link>
          </li>
          <li className="mx-4 nav-item active">
            <Link className="nav-link text-white" to="/projects">PROJECTS</Link>
          </li>
          <li className="mx-4 nav-item active">
            <Link className="nav-link text-white" to="/about">ABOUT</Link>
          </li>
          <li className="mx-4 nav-item active">
            <Link className="nav-link text-white" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar