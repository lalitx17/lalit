import React from "react";

const Homescreen = () => {
  return (
    <div className="container-1 mt-5">
      <div className="box-1">
        <h1 className="hello">Hello, it's me</h1>
        <div>
          <h1 className="lalit">Lalit.</h1>
        </div>
        <p className="title-paragraph">
          An artist making the most of his existence by immersing himself in the
          process of creation with the ambition of coming forth with his magnum
          opus. At the moment, my codes are my colors and computer system – my
          canvas.
        </p>
      </div>
      <div className="box-2">
        <img
          className="profile-pic"
          src={process.env.PUBLIC_URL + "/images/lalitp2.png"}
          alt="Lalit Yadav"
        />
      </div>
    </div>
  );
};

export default Homescreen;
