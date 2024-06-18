import React, { useState } from "react";
import WorkSpaceCard from "./workspacecard";

const WorkSpace = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="recently-visited">
      <div className="header mb-2" onClick={toggleVisibility}>
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
