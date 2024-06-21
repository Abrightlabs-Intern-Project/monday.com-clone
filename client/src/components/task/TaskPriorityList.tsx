import React from "react";
import TaskStatusButton from "./TaskStatusButton";

const priorityOptions = [
  { value: "Critical", color: "rgba(232,105,125,255)" },
  { value: "High", color: "rgba(248,207,52,255)" },
  { value: "Medium", color: "rgba(116,166,240,255)" },
  { value: "Low", color: "#33d391" },
  { value: "Best Effort", color: "#999999" },
  { value: "Missing", color: "#797e93" },
];

interface TaskStatusListProps {
  onSelect: (value: string) => void;
}

const TaskPriorityList: React.FC<TaskStatusListProps> = ({ onSelect }) => {
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
      {priorityOptions.map((option) => (
        <div
          key={option.value}
          className="mb-1 text-white "
          style={{
            background: `${option.color}`,
            cursor: "pointer",
            padding: "5px",
            borderRadius: "3px",
            textAlign: "center",
            fontSize: "small",
          }}
          onClick={() => handleStatusClick(option.value)}
        >
          {option.value}
        </div>
      ))}
    </div>
  );
};

export default TaskPriorityList;
