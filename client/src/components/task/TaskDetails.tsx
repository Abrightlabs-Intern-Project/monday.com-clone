import React, { useState } from "react";
import TaskStatusList from "./TaskStatusList";
import TaskPriorityList from "./TaskPriorityList";
import TaskTypeList from "./TaskTypeList";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/styles/taskDetail.css";
import { Task } from "./taskTable";

interface TaskDetailProps {
  taskName: string | undefined;
  task: Task;
  onSelectStatus: (status: string) => void;
  onSelectPriority: (priority: string) => void;
  onSelectType: (type: string) => void;
  handleChange: (id: string, field: keyof Task, value: string) => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({
  taskName,
  task,
  handleChange,
}) => {
  const [editingField, setEditingField] = useState<string | null>(null);

  const handleInputChange = (field: keyof Task, value: string) => {
    handleChange(task.taskId, field, value);
  };

  const toggleEditing = (field: keyof Task, isEditing: boolean) => {
    setEditingField(isEditing ? field : null);
  };

  return (
    <div className="task-detail-layout">
      <div className="row mb-2">
        <div className="col d-flex align-items-center">
          <h2>{taskName}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center">
          <div className="sprinthome">
            <FontAwesomeIcon icon={faHome} /> Details
          </div>
        </div>
      </div>
      <div className="row content">
        <div className="item-description col-7">
          <div className="item-description-header">
            <h3>Item description</h3>
            <button className="edit-button">Beta</button>
          </div>
          <textarea
            placeholder="Write something or type '/' for more options"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="col-3 task-overview">
          <h3>Task Overview</h3>
          <div className="task-field">
            <strong>Status:</strong>
            {editingField === "status" ? (
              <div className="dropdown-wrapper">
                <TaskStatusList
                  onSelect={(status: string) => {
                    handleInputChange("status", status);
                    toggleEditing("status", false);
                  }}
                />
              </div>
            ) : (
              <div
                className="editable-field"
                onClick={() => toggleEditing("status", true)}
              >
                {task.status || "Missing"}
              </div>
            )}
          </div>
          <div className="task-field">
            <strong>Priority:</strong>
            {editingField === "priority" ? (
              <div className="dropdown-wrapper">
                <TaskPriorityList
                  onSelect={(priority: string) => {
                    handleInputChange("priority", priority);
                    toggleEditing("priority", false);
                  }}
                />
              </div>
            ) : (
              <div
                className="editable-field"
                onClick={() => toggleEditing("priority", true)}
              >
                {task.priority || "Missing"}
              </div>
            )}
          </div>
          <div className="task-field">
            <strong>Type:</strong>
            {editingField === "type" ? (
              <div className="dropdown-wrapper">
                <TaskTypeList
                  onSelect={(type: string) => {
                    handleInputChange("type", type);
                    toggleEditing("type", false);
                  }}
                />
              </div>
            ) : (
              <div
                className="editable-field"
                onClick={() => toggleEditing("type", true)}
              >
                {task.type || "Missing"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
