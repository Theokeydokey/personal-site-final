import React from "react";
import { Link } from "react-router-dom";
import "./styles/twitch.css";
import theoBlink from "../assets/TheoBlink1.jpg";
const Twitch = () => {
  return (
    <>
      {/* Navigation */}
      <section className="nav">
        <nav className="navBar">
          <Link to="/twitch">Twitch</Link>
          <Link to="/music">Music</Link>
        </nav>
      </section>
      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="leftHalf">
            <a
              href="https://twitch.tv/theokeydokey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Theokeydokey on Twitch!
            </a>
          </div>
          <div className="rightHalf">
            <img src={theoBlink} alt="PNG tuber" />
          </div>
        </div>
      </section>

      {/* Twitch Clip Section */}
      <section className="clipsContent">
        <div className="container">
          <div className="leftHalf">
            <iframe
              src="https://clips.twitch.tv/embed?clip=ManlyStrangeKimchiPermaSmug&parent=https://theo-housinger.onrender.com/twitch"
              width="640"
              height="360"
              allowFullScreen
              title="Twitch Clip"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule">
        <div className="container">
          <h1>Schedule</h1>
          <p>Subject to Change</p>
          <div className="calendar">
            {[
              { day: "Monday", time: "18:00 - 21:00" },
              { day: "Tuesday", time: "Day Off" },
              { day: "Wednesday", time: "18:00 - 21:00" },
              { day: "Thursday", time: "18:00 - 21:00" },
              { day: "Friday", time: "18:00 - 23:00" },
              { day: "Saturday", time: "Day Off" },
              { day: "Sunday", time: "Day Off" },
            ].map(({ day, time }) => (
              <div key={day} className="day">
                {day}
                <div className="timeframe">{time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Twitch;
