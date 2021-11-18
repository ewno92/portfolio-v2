import React from "react";
import "./ScreenHeading.scss";

const ScreenHeading = ({ title, subHeading }) => {
  return (
    <div className="heading-container" id="ScreenHeading">
      <div className="screen-heading">
        <span>{title}</span>
      </div>
      {subHeading ? (
        <div className="screen-sub-heading">
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line">
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
