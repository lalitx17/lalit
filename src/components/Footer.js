import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/retro5.png'})` ,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h6 className="next">WHAT'S NEXT</h6>
          <h1 className="together">Let's work together.</h1>
          <p className="project-call">
            If you'd like to talk about a project or job offer, I'm just one email away. 
          </p>
          <br />
          <a className="email-link" href="mailto: lalityadav.ver2@gmail.com">
            <p className="email-text">WRITE ME AN EMAIL</p>
            <FontAwesomeIcon color="white" size="lg" icon={faEnvelope} />
          </a>
          <br />
          <img className="final-logo" src={process.env.PUBLIC_URL + '/images/flogo2.png'} alt="lalite" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
