import React, { useEffect, useState } from "react";
import "./Profilecard.css";
import Profile from "./Profile";

const Profilecard = () => {
  const [profiles, setProfiles] = useState(Profile);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
      setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 3000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [currentProfileIndex, profiles.length]);

  const currentProfile = profiles[currentProfileIndex];

  return (
    <>
      <div className="card">
        <h2 className="heading">Doctor's Note</h2>
        {showImage && (
          <div className="banner">
            <img src={currentProfile.image} alt="Profile" />
          </div>
        )}
        <div className="menu"></div>

        <a href="/" className="nm">
          {currentProfile.name}
        </a>
        <div className="desc">{currentProfile.description}</div>
      </div>
    </>
  );
};

export default Profilecard;
