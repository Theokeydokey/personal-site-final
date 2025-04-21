import React from "react";
import "./styles/professional.css";
import Headshot from "../assets/theo_pro_headshot_384x577.jpg";

const Professional = () => {
  return (
    <>
      <nav className="navBar">
        <a href="#about">About me</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="about" id="about">
        <div className="container">
          <div className="leftHalf">
            <div className="headshot">
              <img src={Headshot} alt="Headshot" />
            </div>
          </div>
          <div className="rightHalf">
            <div className="textH1">
              <h1>About me</h1>
            </div>
            <div className="textP">
              <p>
                Theo is a beginner front-end web developer looking to further
                their knowledge and skillset through experience and application.
                They enjoy the challenge of diving into new tasks and
                integrating themselves with teams of new people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <div className="container">
          <div className="leftHalf">
            <h1 className="textH1">Skills</h1>
            <h2>Public Speaking</h2>
            <h2>Team Management</h2>
            <h2>HTML • CSS • JavaScript • Bootstrap • ReactJS</h2>
          </div>
          <div className="rightHalf">
            <h1 className="textH1">Education</h1>
            <h2 className="edu">BFA in Musical Theatre</h2>
            <p className="eduP">American College Dublin</p>
            <h2 className="edu">
              Professional Certificate in Front-End Web Development
            </h2>
            <p className="eduP">
              University College Dublin Professional Academy
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <ul id="contactList">
            <li>
              <a
                href="https://www.linkedin.com/in/theodore-housinger-441a3431a"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#getInTouch">Contact Me!</a>
            </li>
            <li>
              <a href="#projects">Previous Work</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Professional;
