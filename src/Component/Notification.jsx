import React from "react";

const Notification = ({ count }) => {
  return (
    <div className="w-full flex justify-center animate-fade-in">
      <div className="flex items-center gap-2 px-5 py-2 rounded-full shadow-md bg-gray-100 text-gray-800 text-sm font-normal">
        {/* Blinking green dot */}
        <div className="relative flex items-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>

        {/* Celebration + count */}
        <span>🎉 {count} New courses added!</span>
      </div>
    </div>
  );
};

export default Notification;
