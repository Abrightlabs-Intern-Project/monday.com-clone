import React, { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropCard from "./dropCard";

const AccordionCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="recently-visited" style={{ background: "#181B34" }}>
      <div
        className="header"
        onClick={toggleVisibility}
        style={{ background: "#181B34" }}
      >
        <button
          className={`toggle-button ${isVisible ? "open" : "closed"}`}
          style={{ background: "none", border: "none" }}
        >
          {!isVisible ? (
            <ChevronRightIcon sx={{ color: "white", background: "none" }} />
          ) : (
            <KeyboardArrowDownIcon
              sx={{ color: "white", background: "none" }}
            />
          )}
          <span
            className="ms-3"
            style={{ color: "white", background: "#181B34" }}
          >
            Recently Visited
          </span>
        </button>
      </div>
      {isVisible && <DropCard />}
    </div>
  );
};

export default AccordionCard;
