import React from "react";

export const About = () => {
  return (
    <div>
      <div className="container-about-1 mt-5">
        <div className="box-about-1">
          <p className="title-about-paragraph">
            Besides recommending everyone to watch The Office, I like exploring
            the beauty of algorithms through competitive programming and
            implementing those algorithms in web development to unleash their
            true potential.
          </p>
        </div>
        <div className="box-about-2">
          <img
            className="profile-about-pic"
            src={process.env.PUBLIC_URL + "/images/lalit-revolve.jpg"}
            alt="Lalit Yadav"
          />
        </div>
      </div>

      <div className="container-about-2 mt-5">
        <div className="box-about-3">/01 &nbsp;&nbsp;&nbsp;STORY</div>
        <div className="box-about-4">
          My love for breaking and making things seamlessly transitioned to the
          digital world, and I became a digital tinkerer. When the insight
          finally hits after working on a difficult problem for hours, I feel
          alive. Being a mathematician at heart, I feel ecstatic using the same
          logic in computer science projects to solve real-world challenges.
          <br />
          <br />
          When I’m not coding, you can find me reading anthropology, psychology,
          philosophy, or anything I find interesting. I follow my curiosity down
          to the narrowest alleys. I also love exploring different stories and
          perspectives through movies. <br />
          <br />
        </div>
      </div>
      <div className="container-about-2 mt-5">
        <div className="box-about-3">/02 &nbsp;&nbsp;&nbsp;TECHNOLOGY</div>
        <div className="box-about-4">
          <b>WHAT I USE</b>
          <br />
          <br />
          Here's the list of stacks I use in my projects.
          <br />
          <br />
          <div className="container-list">
            <div>
              <b style={{ fontSize: 21 }}>Web Technologies</b>
              <ul>
                <li>
                  <br />
                </li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <b style={{ fontSize: 21 }}>Other Stacks</b>
              <ul>
                <li>
                  <br />
                </li>
                <li>Git</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>C++</li>
                <li>Jupyter Notebook</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <br />
                </li>
                <li>
                  <br />
                </li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>SQL</li>
              </ul>
            </div>
            {/*             <div>
              <ul>
                <li>
                  <br />
                </li>
                <li>
                  <br />
                </li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Figma</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container-about-2 mt-5">
        <div className="box-about-3">/03 &nbsp;&nbsp;&nbsp;CONTACT</div>
        <div className="box-about-4">
          <b>Socials</b> <br />
          <a href="https://www.linkedin.com/in/lalit-yadav-313b24227/">
            LinkedIn
          </a>
          &nbsp; &nbsp; / &nbsp; &nbsp;
          <a href="https://github.com/lalitx17">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
