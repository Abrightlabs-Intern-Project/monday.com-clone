import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropCard from "./dropCard";

const AccordionCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="recently-visited">
      <div className="header" onClick={toggleVisibility}>
        <button className={`toggle-button ${isVisible ? "open" : "closed"}`}>
          {isVisible ? "▼" : "▶"}
        </button>
        <span className="ms-1">Recently Visited</span>
      </div>
      {isVisible && <DropCard />}
    </div>
  );
};

export default AccordionCard;
