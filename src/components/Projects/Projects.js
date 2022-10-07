import "./project.css";

import React from "react";

const Project = () => {
  return (
    <div className="project">
      <h1 className="project-title">Projects</h1>
      <h3 className="project-title-sub">Take a look at some my projects</h3>
      <div className="container">
        <div className="card">
          <div className="top">
            <h3>PAN Update Form</h3>
          </div>
          <div className="center">
            A PAN Card Update Form using Html and Css, where users can add
            details and submit to update PAN Card form.
          </div>
          <div className="bottom">
            <a
              href="https://hardcore-goldstine-9290e9.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button className="view-project">View</button>
            </a>

            <a
              href="https://github.com/kishorekumar512/Pancard-Form.git"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button style={{ marginLeft: "10px" }} className="view-project">
                Code
              </button>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="top">
            <h3>Rest API</h3>
          </div>
          <div className="center">
            An API - (Cocktail Api) built using DOM method where users can get
            Cocktail pictures and recipes. by refreshing the site users can get
            variety of Cocktail images and recipes.
          </div>
          <div className="bottom">
            <a
              href="https://delicate-sunshine-17edb4.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button className="view-project">View</button>
            </a>

            <a
              href="https://github.com/kishorekumar512/DRINK-API.git"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button style={{ marginLeft: "10px" }} className="view-project">
                Code
              </button>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="top">
            <h3>Tic-Tac-Toe</h3>
          </div>
          <div className="center">
            Tic-Tac-Toe game built in React.js with functions, grid, useState,
            components, algorithms and Confetti.
          </div>
          <div className="bottom">
            <a
              href="https://helpful-bombolone-364208.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button className="view-project">View</button>
            </a>

            <a
              href="https://github.com/kishorekumar512/Tic-Tac-Toe.git"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button style={{ marginLeft: "10px" }} className="view-project">
                Code
              </button>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="top">
            <h3>Social Media App</h3>
          </div>
          <div className="center">
            MERN Social Media application using React.js, Node.js and MongoDB
            with Mongoose, Hooks, Context and more.
          </div>
          <div className="bottom">
            <a
              href="https://glistening-frangollo-340442.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button className="view-project">View</button>
            </a>

            <a
              href="https://github.com/jana621/social-media"
              target="_blank"
              rel="noreferrer"
              className="a-tag"
            >
              <button style={{ marginLeft: "10px" }} className="view-project">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
