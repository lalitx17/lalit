import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {ValidationError } from "@formspree/react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="p-xl-5 p-3">
          <h1 className="touch"> Get in Touch.</h1>
          <div className="row contact-form">
            <div className="col-sm-12">
              <form method="post" action="https://formspree.io/f/xlekbjrb">
                <div>
                  <div className="form-floating mb-3">
                    <input
                      type="Name"
                      name="Name"
                      className="form-control"
                      id="floatingName"
                      placeholder="Name"
                      autoComplete="off"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="Name"
                    />
                    <label htmlFor="floatingName">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      autoComplete="off"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="Email"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="Subject"
                      className="form-control no-outline"
                      id="floatingComment"
                      placeholder="anything"
                      autoComplete="off"
                      required
                    />
                    <ValidationError
                      prefix="Subject"
                      field="Subject"
                    />
                    <label htmlFor="floatingComment">Subject</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      type="text"
                      name="Message"
                      className="form-control no-outline"
                      id="cin"
                      placeholder="anything"
                      autoComplete="off"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="Message"
                    />
                    <label htmlFor="floatingComment">Message</label>
                  </div>
                </div>
                <div className="g-recaptcha" data-sitekey="6LdzRpYkAAAAAAtfrria-LD3XWVGgap7UqN4WoGN"></div>
                <button
                  className="connect btn btn-primary btn-lg"
                  type="submit"
                >
                  Send Message
                  <FontAwesomeIcon className="paperPlane" icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
