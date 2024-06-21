import React from "react";

const typeOptions = [
  { value: "Quality", color: "#fbb4f4" },
  { value: "Feature", color: "#33d391" },
  { value: "Bug", color: "#e8697d" },
  { value: "Test", color: "#5c5c5c" },
  { value: "Security", color: "#359970" },
  { value: "Missing", color: "#797e93" },
];

interface TaskTypeListProps {
  onSelect: (value: string) => void;
}

const TaskTypeList: React.FC<TaskTypeListProps> = ({ onSelect }) => {
  const handleTypeClick = (value: string) => {
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
      {typeOptions.map((option) => (
        <div
          key={option.value}
          className="mb-1 text-white"
          style={{
            background: option.color,
            cursor: "pointer",
            padding: "5px",
            borderRadius: "3px",
            textAlign: "center",
            fontSize: "small",
          }}
          onClick={() => handleTypeClick(option.value)}
        >
          {option.value}
        </div>
      ))}
    </div>
  );
};

export default TaskTypeList;
