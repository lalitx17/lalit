import React from "react";

export const About = () => {
  return (
    <div>
      <div className="container-about-1 mt-5">
        <div className="box-about-1">
          <p className="title-about-paragraph">
            An enthusiastic product designer currently shaping the future of
            website development by integrating strong algorithms that promote
            user interaction with information and data.
          </p>
        </div>
        <div className="box-about-2">
          <img
            className="profile-about-pic"
            src={process.env.PUBLIC_URL + "/images/lalitp2.png"}
            alt="Lalit Yadav"
          />
        </div>
      </div>

      <div className="container-about-2 mt-5">
        <div className="box-about-3">/01 &nbsp;&nbsp;&nbsp;STORY</div>
        <div className="box-about-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue
          luctus ipsum, vel efficitur mi sodales eu. Morbi luctus fermentum
          augue, eu tempus velit venenatis et. Quisque a pharetra ipsum, at
          efficitur sapien. Nullam quis purus nibh. In hendrerit sapien nec ex
          ultrices efficitur vitae porttitor elit. Nam ac aliquam magna. Vivamus
          vel nulla congue nibh hendrerit feugiat. Sed facilisis efficitur
          aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Nunc elit velit, volutpat id venenatis
          non, congue vitae mauris. Quisque porta odio ac luctus vulputate.{" "}
          <br />
          <br />
          Donec iaculis tempor tincidunt. Praesent in lacinia velit. Donec
          finibus dolor felis, a aliquet sem tempus nec. Cras tincidunt et eros
          eu vehicula. Sed ac suscipit lectus. Cras et orci at erat commodo
          lacinia. Sed efficitur efficitur turpis, at interdum arcu congue
          vitae. Ut dolor ex, scelerisque eget mollis vitae, convallis in enim.
          Vivamus quis tellus arcu. Vestibulum in tortor interdum, laoreet quam
          a, hendrerit tellus. Donec ut dolor sed urna placerat porta.
          Vestibulum sed tincidunt turpis. Fusce convallis sapien ut est
          condimentum dignissim. Curabitur mollis pellentesque elit, in ultrices
          mi semper nec. In hac habitasse platea dictumst. Aliquam sagittis
          sapien ut erat placerat porta. Duis eu egestas nisl, ac tristique
          mauris. <br />
          <br />
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nulla eget diam diam. Nulla finibus tellus
          erat, consectetur lacinia velit mattis et. Vivamus turpis nulla,
          malesuada luctus sem eu, imperdiet pretium felis. <br />
        </div>
      </div>
      <div className="container-about-2 mt-5">
        <div className="box-about-3">/02 &nbsp;&nbsp;&nbsp;TECHNOLOGY</div>
        <div className="box-about-4">
          In hac habitasse platea dictumst. Aliquam sagittis sapien ut erat
          placerat porta. Duis eu egestas nisl, ac tristique mauris. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nulla eget diam diam. Nulla finibus tellus erat, consectetur
          lacinia velit mattis et. Vivamus turpis nulla, malesuada luctus sem
          eu, imperdiet pretium felis. Aenean pellentesque mollis porttitor.
          <br />
          <br />
          <div className="container-list">
            <div>
              <b style={{fontSize:21}}>Web Technologies</b>
              <ul>
              <li><br /></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <b style={{fontSize:21}} >Other Stacks</b>
              <ul>
              <li><br /></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <ul>
              <li><br /></li>
              <li><br /></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <ul>
              <li>  <br />   </li>
              <li><br /></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-about-2 mt-5">
        <div className="box-about-3">/03 &nbsp;&nbsp;&nbsp;CONTACT</div>
        <div className="box-about-4">
          <b>Socials</b> <br />
          <a href="www.linkedin.com">LinkedIn</a>
          
        </div>


</div>
    </div>
  );
};
