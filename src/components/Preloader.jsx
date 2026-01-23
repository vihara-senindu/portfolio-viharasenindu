import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="spinner">
        <div className="circle outer"></div>
        <div className="circle inner"></div>
        <div className="icon">
          <i className="fas fa-code"></i>
        </div>
      </div>
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
};

export default Preloader;