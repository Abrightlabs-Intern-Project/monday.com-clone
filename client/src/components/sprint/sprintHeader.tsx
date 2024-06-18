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

const SprintHeader = () => {
  return (
    <div className="sprintHeader mb-5">
      <div className="row"></div>
      <div className="container mt-4">
        <div className="row">
          <div className="col d-flex align-items-center">
            <div className="text-white fs-4 fw-bold me-3">Sprints</div>
            <div className="me-3">
              <FontAwesomeIcon icon={faExclamationCircle} />
            </div>
            <div className="me-3">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="me-3">
              <FontAwesomeIcon icon={faComments} />
            </div>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <div className="me-3 " style={{ fontSize: "small" }}>
              <button
                className="p-1 fs-xs"
                style={{
                  borderRadius: "10px",
                  background: "rgb(32, 28, 60)",
                  color: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Activity{" "}
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ marginLeft: "8px" }}
                />
              </button>
            </div>
            <div className="me-2" style={{ fontSize: "small" }}>
              <button
                className="p-1 btn-sm"
                style={{
                  background: "rgb(32, 28, 60)",
                  color: "#fff",
                  border: "1px solid white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ marginRight: "8px" }}
                />
                Invite
              </button>
            </div>
            <div className="" style={{ fontSize: "large" }}>
              <button
                className="p-1 btn-sm"
                style={{
                  background: "rgb(32, 28, 60)",
                  color: "#fff",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintHeader;
