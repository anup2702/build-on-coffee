import React from "react";
import "./AchievementBanner.css";
export default function AchievementBanner({ title, description, icon }) {
  return (
    <div className="achievement-banner">
      <span className="achievement-icon">{icon}</span>
      <div>
        <h2 className="achievement-title">{title}</h2>
        <p className="achievement-desc">{description}</p>
      </div>
    </div>
  );
}