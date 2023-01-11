import React from "react";

const Projects = () => {
  return (
    <div className="container-2">
      <div className="column-1">
        <div className="box-3">
          <img
          className="box-img"
          src={process.env.PUBLIC_URL + '/images/songs.jpg'}
          
            width="250px"
            height="313px"
            alt="songs"
          />
        <h3 className="box-caption"> MusicXMood</h3>
        </div>
        <div className="box-4">
        <img
          className="box-img"
          src={process.env.PUBLIC_URL + '/images/books2.jpg'}
            width="243px"
            height="235px"
            alt="books"
          />
        <h3 className="box-caption"> LitWords</h3>
        </div>
        
      </div>
      <div className="column-2">
        <div className="box-5">
        <img
          className="box-img"
          src={process.env.PUBLIC_URL + '/images/music3.jpg'}
            width="243px"
            height="235px"
            alt="music"
          />
        <h3 className="box-caption"> Instrumental</h3>
        </div>
        <div className="box-6">
        <img
          className="box-img"
          src={process.env.PUBLIC_URL + '/images/maps.jpg'}
            width="243px"
            height="313px"
            alt="maps"
          />
        <h3 className="box-caption">Path Pradarshak</h3>
        </div>
      </div>
      <div className="column-3">
        <div className="box-7">
        <img
          className="box-img"
          src={process.env.PUBLIC_URL + '/images/todolist.jpg'}
            width="243px"
            height="313px"
            alt="todolist"
          />
        <h3 className="box-caption"> To Do List</h3>
        </div>
        <div className="box-8">
        <img
          className="box-img"
          src={process.env.PUBLIC_URL + '/images/Artificial.jpg'}
            width="243px"
            height="235px"
            alt="AI"
          />
        <h3 className="box-caption">Coming Soon</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
