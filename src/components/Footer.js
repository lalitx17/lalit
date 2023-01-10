import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <div
          style={{
            backgroundImage: `URL("images/retro5.png")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h6 className="next">WHAT'S NEXT</h6>
          <h1 className="together">Let's work together.</h1>
          <p className="project-call">
            If you'd like to talk about a project you want help with or need an
            advice about product design, just drop me a message at
            nathan@ojieame.design I'm currently Available for any design systems
            projects, dashboard designs or landing pages gigs.
          </p>
          <br />
          <a className="email-link" href="mailto: lalityadav.ver2@gmail.com">
            <p className="email-text">WRITE ME AN EMAIL</p>
            <FontAwesomeIcon color='white' size='lg' icon={faEnvelope} />
          </a>
          <br />
          <img className="final-logo" src="images/Flogo2.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
