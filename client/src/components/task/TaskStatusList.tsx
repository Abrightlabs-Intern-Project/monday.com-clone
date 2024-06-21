import React from "react";
import TaskStatusButton from "./TaskStatusButton";

const statusOptions = [
  // { value: "Ready to start", color: "#007bff" },
  // { value: "In Progress", color: "#ffca28" },
  // { value: "Waiting for review", color: "#80d8ff" },
  // { value: "Pending Deploy", color: "#8d6e63" },
  // { value: "Done", color: "#4caf50" },
  { value: "Stuck", color: "#ff5252" },
];

interface TaskStatusListProps {
  onSelect: (value: string) => void;
}

const TaskStatusList: React.FC<TaskStatusListProps> = ({ onSelect }) => {
  const handleStatusClick = (value: string) => {
    onSelect(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        background: "rgb(48, 50, 70)",
        padding: "20px",
      }}
    >
      <div
        key="Ready to start"
        className="mb-1 text-white"
        style={{
          background: "#007bff",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "3px",
          textAlign: "center",
          fontSize: "small",
        }}
        onClick={() => handleStatusClick("Ready to start")}
      >
        Ready to start
      </div>
      <div
        key="In Progress"
        className="mb-1 text-white"
        style={{
          background: "#ffca28",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "3px",
          textAlign: "center",
          fontSize: "small",
        }}
        onClick={() => handleStatusClick("In Progress")}
      >
        In Progress
      </div>
      <div
        key="Waiting for review"
        className="mb-1 text-white"
        style={{
          background: "#80d8ff",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "3px",
          textAlign: "center",
          fontSize: "small",
        }}
        onClick={() => handleStatusClick("Waiting for review")}
      >
        Waiting for review
      </div>
      <div
        key="Pending Deploy"
        className="mb-1 text-white"
        style={{
          background: "#8d6e63",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "3px",
          textAlign: "center",
          fontSize: "small",
        }}
        onClick={() => handleStatusClick("Pending Deploy")}
      >
        Pending Deploy
      </div>
      <div
        key="Done"
        className="mb-1 text-white"
        style={{
          background: "#4caf50",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "3px",
          textAlign: "center",
          fontSize: "small",
        }}
        onClick={() => handleStatusClick("Done")}
      >
        Done
      </div>
      <div
        key="Stuck"
        className="mb-1 text-white"
        style={{
          background: "#ff5252",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "3px",
          textAlign: "center",
          fontSize: "small",
        }}
        onClick={() => handleStatusClick("Stuck")}
      >
        Stuck
      </div>
    </div>
  );
};

export default TaskStatusList;
