import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress, label }) => (
  <div className="progress-bar-container">
    <div className="progress-bar-label">{label}</div>
    <div className="progress-bar-bg">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
    </div>
    <div className="progress-bar-percent">{progress}%</div>
  </div>
);

export default ProgressBar;