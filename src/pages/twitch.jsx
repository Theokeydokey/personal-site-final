import React from "react";
import { Link } from "react-router-dom";
import "./styles/twitch.css";
import theoBlink from "../assets/TheoBlink1.jpg";
const Twitch = () => {
  return (
    <>
      {/* Navigation */}
<<<<<<< HEAD
      <section className="nav">
        <nav className="navBar">
          <Link to="/twitch">Twitch</Link>
          <Link to="/music">Music</Link>
        </nav>
      </section>
      {/* About Section */}
      <section className="about">
=======
      <nav className="navBar">
        <Link to="/twitch">Twitch</Link>
        <Link to="/music">Music</Link>
      </nav>

      {/* About Section */}
      <section id="about">
>>>>>>> 6e6737261f42a895ed676e87d09ad0a544fc7def
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
<<<<<<< HEAD
      <section className="clipsContent">
=======
      <section id="clipsContent">
>>>>>>> 6e6737261f42a895ed676e87d09ad0a544fc7def
        <div className="container">
          <div className="leftHalf">
            <iframe
              src="https://www.twitch.tv/theokeydokey/clip/ManlyStrangeKimchiPermaSmug-e1JBi9cqX16W6OFp?filter=clips&range=all&sort=time"
              width="640"
              height="360"
              allowFullScreen
              title="Twitch Clip"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
<<<<<<< HEAD
      <section className="schedule">
=======
      <section id="schedule">
>>>>>>> 6e6737261f42a895ed676e87d09ad0a544fc7def
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
