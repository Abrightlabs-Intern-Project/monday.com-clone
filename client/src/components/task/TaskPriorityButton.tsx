import React from "react";

interface TaskStatusButtonProps {
  value: string;
  color: string;
  onClick: (value: string) => void;
}

const TaskPriorityButton: React.FC<TaskStatusButtonProps> = ({
  value,
  color,
  onClick,
}) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        margin: "5px 0",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
      }}
    >
      {value}
    </button>
  );
};

export default TaskPriorityButton;
