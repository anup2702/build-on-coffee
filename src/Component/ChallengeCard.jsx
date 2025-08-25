import React from "react";
import "./ChallengeCard.css";

const ChallengeCard = ({ title, description, points, badge }) => (
  <div className="challenge-card">
    <div className="challenge-header">
      <span className="challenge-badge">{badge}</span>
      <h3 className="challenge-title">{title}</h3>
    </div>
    <p className="challenge-desc">{description}</p>
    <div className="challenge-footer">
      <span className="challenge-points">{points} pts</span>
      <button className="challenge-btn">Accept Challenge</button>
    </div>
  </div>
);

export default ChallengeCard;