import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading";
import "./AboutMe.scss";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";

const AboutMe = (props) => {
  const SCREEN_CONSTANTS = {
    description:
      "Full stack web eveloper with background knowledge of MERN stack along with skills of building applications with utmost efficiency. Strong professional willing to be an asset for an organization.",
    highlights: {
      bullets: [
        "Full Stack web development",
        "Interactive Front End as per the design",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight">
        <div key={i} className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">Hire Me</button>
              <a href=".pdf" download=".pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
