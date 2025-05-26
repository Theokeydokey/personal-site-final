import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import twitchLogo from "../assets/twitch.jpg";
import treble from "../assets/treble.jpg";
const Creativity = () => {
  useEffect(() => {
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
            <img
              src={twitchLogo}
              alt="Twitch"
              className="twitch-img" /*clickable images and titles*/
            />
            <h1>Twitch</h1>{" "}
          </Link>
        </div>
        <div className="half">
          <Link to="/music">
            <img src={treble} alt="Music" className="music-img" />
            <h1>Music</h1>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
