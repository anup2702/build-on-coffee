import React from "react";
import "./Badge.css";
export default function Badge({ icon, label, color, glow }) {
  return (
    <div className="badge-wow" style={{
      background: `linear-gradient(90deg, ${color[0]}, ${color[1]})`,
      boxShadow: glow ? `0 0 24px 4px ${color[1]}` : "none"
    }}>
      <span style={{fontSize: "2rem", marginRight: "12px"}}>{icon}</span>
      {label}
    </div>
  );
}