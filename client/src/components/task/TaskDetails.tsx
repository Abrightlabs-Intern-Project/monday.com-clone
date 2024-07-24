import React, { useState } from "react";
import TaskStatusList from "./TaskStatusList";
import TaskPriorityList from "./TaskPriorityList";
import TaskTypeList from "./TaskTypeList";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import "../../assets/styles/taskDetail.css";
import { Task } from "../../interfaces/Task";

export const statusColors: { [key: string]: string } = {
  "Ready to start": "#007bff",
  "In Progress": "#ffca28",
  "Waiting for review": "#80d8ff",
  "Pending Deploy": "#8d6e63",
  Done: "#4caf50",
  Stuck: "#ff5252",
  "": "#797e93",
};

export const priorityColors: { [key: string]: string } = {
  Critical: "rgba(232,105,125,255)",
  High: "rgba(248,207,52,255)",
  Medium: "rgba(116,166,240,255)",
  Low: "#33d391",
  "Best Effort": "#999999",
  Missing: "#797e93",
};

export const typeColors: { [key: string]: string } = {
  Quality: "#fbb4f4",
  Feature: "#33d391",
  Bug: "#e8697d",
  Test: "#5c5c5c",
  Security: "#359970",
  Missing: "#797e93",
};

interface TaskDetailProps {
  taskName: string | undefined;
  task: Task;
  onSelectStatus: (status: string) => void;
  onSelectPriority: (priority: string) => void;
  onSelectType: (type: string) => void;
  handleChange: (id: string, field: keyof Task, value: string) => void;
  open: boolean;
  onClose: () => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({
  taskName,
  task,
  handleChange,
  open,
  onClose,
}) => {
  const [editingField, setEditingField] = useState<string | null>(null);

  const handleInputChange = (field: keyof Task, value: string) => {
    handleChange(task.taskId, field, value);
  };

  const toggleEditing = (field: keyof Task, isEditing: boolean) => {
    setEditingField(isEditing ? field : null);
  };

  return (
    <div className="" style={{ position: "relative" }}>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        sx={{ color: "white" }}
      >
        <DialogTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <Typography variant="h6">{taskName || "Task Name"}</Typography>
            <IconButton edge="end" color="inherit" onClick={onClose}>
              <CloseIcon sx={{ color: "white", background: "white" }} />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent
          sx={{
            overflow: "hidden",
            padding: 2,
          }}
        >
          <div className="row mb-2">
            <div className="col d-flex align-items-center">
              <div className="sprinthome" style={{ overflow: "hidden" }}>
                <FontAwesomeIcon icon={faHome} /> Details
              </div>
            </div>
          </div>
          <div className="row content" style={{ background: "inherit" }}>
            <div
              className="item-description col-7"
              style={{ background: "inherit" }}
            >
              <div
                className="item-description-header"
                style={{ background: "inherit" }}
              >
                <Typography variant="h6">Item description</Typography>
                <Button sx={{ color: "white" }}>Beta</Button>
              </div>
              <TextareaAutosize
                minRows={4}
                placeholder="Write something or type '/' for more options"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {editingField === "status" && (
              <div className="dropdown-wrapper">
                <TaskStatusList
                  onSelect={(status: string) => {
                    handleInputChange("status", status);
                    toggleEditing("status", false);
                  }}
                />
              </div>
            )}
            {editingField === "priority" && (
              <div className="dropdown-wrapper">
                <TaskPriorityList
                  onSelect={(priority: string) => {
                    handleInputChange("priority", priority);
                    toggleEditing("priority", false);
                  }}
                />
              </div>
            )}
            {editingField === "type" && (
              <div className="dropdown-wrapper">
                <TaskTypeList
                  onSelect={(type: string) => {
                    handleInputChange("type", type);
                    toggleEditing("type", false);
                  }}
                />
              </div>
            )}
            <div
              className="col-3 task-overview"
              style={{
                position: "relative",
                background: "inherit",
                overflow: "auto",
              }}
            >
              <Typography variant="h6">Task Overview</Typography>
              <div className="task-field" style={{ position: "relative" }}>
                <strong style={{ position: "relative" }}>Status:</strong>
                <div
                  className="editable-field"
                  onClick={() => toggleEditing("status", true)}
                  style={{
                    backgroundColor: statusColors[task.status] || "#797e93",
                  }}
                >
                  {task.status || "Missing"}
                </div>
                {editingField === "status" ? <></> : <></>}
              </div>
              <div className="task-field">
                <strong>Priority:</strong>
                <div
                  className="editable-field"
                  onClick={() => toggleEditing("priority", true)}
                  style={{
                    backgroundColor: priorityColors[task.priority] || "#797e93",
                  }}
                >
                  {task.priority || "Missing"}
                </div>
              </div>
              <div className="task-field">
                <strong>Type:</strong>
                <div
                  className="editable-field"
                  onClick={() => toggleEditing("type", true)}
                  style={{
                    backgroundColor: typeColors[task.type] || "#797e93",
                  }}
                >
                  {task.type || "Missing"}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskDetail;
