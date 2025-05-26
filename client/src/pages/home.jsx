import React from "react";
import { Link } from "react-router-dom";
import Headshot from "../assets/theo_pro_headshot_384x577.jpg";
import theoBlink from "../assets/TheoBlink1.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="half">
        <Link to="/Professional">
          <img src={Headshot} alt="Web Developer" /* clickable images */ />
          <h1>Web Developer</h1>{" "}
        </Link>
      </div>
      <div className="half">
        <Link to="/creativity">
          <img src={theoBlink} alt="Content Creator" />
          <h1>Content Creator</h1>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
