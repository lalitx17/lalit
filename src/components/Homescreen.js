import React from 'react';

const Homescreen = () => {
  return (
    <div className="container-1 mt-5">
    <div className="box-1">
      <h1 className="hello">Hello, it's me</h1>
      <div>
        <h1 className="lalit">lalit.</h1>
      </div>
      <p className="title-paragraph">
        An enthusiastic product designer currently shaping the future of
        website development by integrating strong algorithms that promote
        user interaction with information and data.
      </p>
    </div>
    <div className="box-2">
      <img
        className="profile-pic"
        src={process.env.PUBLIC_URL + '/images/lalitp2.png'}
        alt="Lalit Yadav"
      />
    </div>
  </div>
  )
}

export default Homescreen