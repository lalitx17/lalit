import React from 'react'

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
            <a class="nav-link text-white" href="/">HOME</a>
          </li>
          <li class="mx-4 nav-item active">
            <a class="nav-link text-white" href="/projects">PROJECTS</a>
          </li>
          <li class="mx-4 nav-item active">
            <a class="nav-link text-white" href="/about">ABOUT</a>
          </li>
          <li class="mx-4 nav-item active">
            <a class="nav-link text-white" href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar