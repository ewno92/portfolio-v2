import React from "react";
import Typical from "react-typical";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="col">
            <div className="col-icon">
              <a href="https://github.com/ewno92">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://github.com/ewno92">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, My name is
              <span className="highlighted-text"> Eun</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
          <span className="profile-role-tagline">
            Knack of building applications with front and back end operations.
          </span>

          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>

            <a href="resume2021.pdf" download="resume2021.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
