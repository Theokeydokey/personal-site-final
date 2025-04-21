import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/creativity.css"; // Import the CSS file
import twitchLogo from "../assets/twitch.jpg";
import treble from "../assets/treble.jpg";
const Creativity = () => {
  useEffect(() => {
    // Perform any logic that would typically be in your JavaScript file
    console.log("Creativity component has been mounted.");
  }, []);

  return (
    <div>
      <header className="creativityHead">
        <h1>Theokeydokey</h1>
      </header>
      <div className="container">
        <div className="half">
          <Link to="/twitch">
            <img src={twitchLogo} alt="Twitch" className="twitch-img" />
          </Link>
          <h1>Twitch</h1>
        </div>
        <div className="half">
          <Link to="/music">
            <img src={treble} alt="Music" className="music-img" />
          </Link>
          <h1>Music</h1>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
