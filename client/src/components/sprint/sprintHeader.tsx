import React from "react";

const SprintHeader = () => {
  return (
    <div
      className="sprintHeader mb-5 SplBcg"
      style={{ backgroundColor: "rgb(24, 27, 52)", overflow: "hidden" }}
    >
      <div className="row"></div>
      <div
        className="container mt-4"
        style={{ backgroundColor: "rgb(24, 27, 52)" }}
      >
        <div className="row">
          <div
            className="col d-flex align-items-center "
            style={{ backgroundColor: "rgb(24, 27, 52)" }}
          >
            <div
              className="text-white fs-4 fw-bold me-3"
              style={{ backgroundColor: "rgb(24, 27, 52)" }}
            >
              Sprints
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintHeader;
