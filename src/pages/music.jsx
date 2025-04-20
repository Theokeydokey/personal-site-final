import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 6e6737261f42a895ed676e87d09ad0a544fc7def
import "./styles/music.css";
import { Link } from "react-router-dom";
import Corporate from "../assets/corporate.mp3";
import Wonder from "../assets/Wonder.mp3";
const Music = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navBar">
        <Link to="/twitch">Twitch</Link>
        <Link to="/music">Music</Link>
      </nav>

      {/* Work Examples Section */}
<<<<<<< HEAD
      <section className="examples">
=======
      <section id="examples">
>>>>>>> 6e6737261f42a895ed676e87d09ad0a544fc7def
        <h1>My Work!</h1>
        <div className="container">
          <div className="leftHalf">
            <h3>Wonder</h3>
            <audio controls>
              <source src={Wonder} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="rightHalf">
            <h3>Corporate Incorporated</h3>
            <h3>Training Video</h3>
            <audio controls>
              <source src={Corporate} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      {/* Ko-fi & Twitch Section */}
<<<<<<< HEAD
      <section className="kofi">
=======
      <section id="kofi">
>>>>>>> 6e6737261f42a895ed676e87d09ad0a544fc7def
        <div className="container">
          <div className="leftHalf">
            <h2>Commissions and Donations</h2>
            <a
              href="https://ko-fi.com/theokeydokey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a Ko-fi!
            </a>
          </div>
          <div className="rightHalf">
            <h2>Check out my Twitch to join in on making music!</h2>
            <a
              href="https://twitch.tv/theokeydokey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Theokeydokey on Twitch!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Music;
