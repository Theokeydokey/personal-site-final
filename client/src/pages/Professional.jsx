import React, { useEffect, useState } from "react";
import "./styles/professional.css";
import axios from "axios";
import Headshot from "../assets/theo_pro_headshot_384x577.jpg";

const Professional = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const baseURL =
          import.meta.env.MODE === "development"
            ? "http://localhost:3001"
            : import.meta.env.VITE_BACKEND_URL;

        const response = await axios.get(`${baseURL}/api/weather?city=Dublin`);
        console.log("Weather API response:", response.data);
        setWeather(response.data);
      } catch (error) {
        console.error("Weather fetch failed:", error);
      }
    };

    fetchWeather();
  }, []);
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
      <section className="exampleWeather" id="exampleWeather">
        <div className="container">
          {weather && weather.success !== false ? (
            <div className="weatherSegment">
              <h2 className="weatherName">
                Weather in {weather.location.name}
              </h2>
              <p className="weatherText">
                Temperature: {weather.current.temperature}°C
              </p>
              <p className="weatherText">
                Condition: {weather.current.weather_descriptions[0]}
              </p>
              <p className="weatherText">
                Local Date and Time: {weather.location.localtime}
              </p>
            </div>
          ) : (
            <p>Unable to fetch weather data. Please try again later.</p>
          )}
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
