import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="navbar-brand lalit-logo-div">
        <img
          src="images/logox.png"
          class="d-inline-block align-baseline lalit-logo"
          alt=""
        />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <ul class="navbar-nav mr-auto top titlebox">
          <li class="mx-4 nav-item active">
            <Link class="nav-link text-white" to="/">HOME</Link>
          </li>
          <li class="mx-4 nav-item active">
            <Link class="nav-link text-white" to="/projects">PROJECTS</Link>
          </li>
          <li class="mx-4 nav-item active">
            <Link class="nav-link text-white" to="/about">ABOUT</Link>
          </li>
          <li class="mx-4 nav-item active">
            <Link class="nav-link text-white" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar