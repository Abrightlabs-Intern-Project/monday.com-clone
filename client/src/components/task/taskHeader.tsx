import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faStar,
  faComments,
  faUser,
  faUserPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const TaskHeader = () => {
  return (
    <div
      className="sprintHeader mb-5 text-white"
      style={{ backgroundColor: "rgb(24, 27, 52)" }}
    >
      <div className="row"></div>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(24, 27, 52)" }}
      >
        <div className="row" style={{ backgroundColor: "rgb(24, 27, 52)" }}>
          <div
            className="col d-flex align-items-center"
            style={{ backgroundColor: "inherit" }}
          >
            <div
              className="text-white fs-4 fw-bold me-3"
              style={{ backgroundColor: "inherit" }}
            >
              Tasks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
