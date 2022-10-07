import React from "react";
import "./about.css";
import giff from "../../images/developer.gif";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import node from "../../images/node.png";
import mongo from "../../images/mongo.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={giff} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Certified MERN Stack Developer interested to work in both front and
          back end operations.
        </p>
        <p className="a-desc">
          Fresher from Guvi Geek Technology with adequate knowledge of MERN
          Stack (MERN, HTML, CSS & JavaScript).
          <ul className="ul" style={{ marginTop: "10px" }}>
            <li>Flexible</li>
            <li>Creative</li>
            <li>Energetic</li>
          </ul>
        </p>
        <div className="a-skill-container">
          <h2 className="a-code-with">Things I Code with</h2>
          <div className="a-skill-container-items">
            <img src={html} alt="" className="a-langs-img" />
            <img src={css} alt="" className="a-langs-img" />
            <img src={js} alt="" className="a-langs-img" />
            <img src={react} alt="" className="a-langs-img" />
            <img src={node} alt="" className="a-langs-img" />
            <img src={mongo} alt="" className="a-langs-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
