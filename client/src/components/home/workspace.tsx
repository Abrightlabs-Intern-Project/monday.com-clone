import React, { useState } from "react";
import WorkSpaceCard from "./workspacecard";

const WorkSpace = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="recently-visited" style={{ background: "#181B34" }}>
      <div
        className="header mb-2"
        onClick={toggleVisibility}
        style={{ background: "#181B34" }}
      >
        <button className={`toggle-button ${isVisible ? "open" : "closed"}`}>
          {isVisible ? "V" : ">"}
        </button>
        Workspace
      </div>
      {isVisible && <WorkSpaceCard />}
    </div>
  );
};

export default WorkSpace;
