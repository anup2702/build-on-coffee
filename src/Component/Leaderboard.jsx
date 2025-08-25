import React from "react";
import "./Leaderboard.css";

const Leaderboard = ({ users }) => (
  <div className="leaderboard-container">
    <h2 className="leaderboard-title">Top Learners</h2>
    <ul className="leaderboard-list">
      {users.map((user, idx) => (
        <li key={user.id} className={`leaderboard-item ${idx === 0 ? "first-place" : ""}`}>
          <span className="leaderboard-rank">#{idx + 1}</span>
          <span className="leaderboard-name">{user.name}</span>
          <span className="leaderboard-points">{user.points} pts</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Leaderboard;