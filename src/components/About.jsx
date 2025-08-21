import React from "react";
import "../styles/About.css";
import SpotlightCard from "./custom/SpotlightCard";
import ProfileCard from "./custom/ProfileCard";
import profile from "../assets/profile.jpg";
import avatar from "../assets/avatar.jpg";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <ProfileCard
          name="Daniel Sarabusing"
          title="Comsci Student"
          handle="danielmarkk_"
          status="Busy"
          contactText="Contact Me"
          avatarUrl={profile}
          miniAvatarUrl={avatar}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => (window.location.href = "#contact")}
        />
        <div className="about-boxes-container">
          <SpotlightCard spotlightColor="#7a11f3c5" className="about-box">
            <h3>About Me</h3>
            <p>
              I'm a passionate developer with experience in modern web
              technologies. I love creating beautiful, functional applications
              that solve real-world problems.
            </p>
            <p>
              My expertise includes React, JavaScript, Node.js, and various
              other technologies that help bring ideas to life.
            </p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="#7a11f3c5" className="about-box">
            <h3>Skills & Technologies</h3>
            <div className="skills-container">
              <div className="skill-item">
                <div className="skill-label">
                  Frontend: React, JavaScript, HTML, CSS
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Frontend skills"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">Backend: JS, Python</div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Backend skills"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">Database: MySQL, Firebase</div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Database skills"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  Tools: Git, Github, Postman, VS Code
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Tools proficiency"
                  aria-valuenow="89"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "89%" }}></div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}

export default About;
