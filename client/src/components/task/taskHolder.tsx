import React from "react";
import TaskHeader from "./taskHeader";
import TaskTable from "./taskTable";
import TaskStatusList from "./TaskStatusList";
import TaskDetail from "./TaskDetails";
import UsersToTask from "./UsersToTask";
import "../../assets/styles/TaskHeader.css";
const TaskHolder = () => {
  return (
    <div className="TaskHolder">
      <TaskHeader />
      {/* <TaskBody /> */}
      <TaskTable />
      {/* <UsersToTask /> */}
    </div>
  );
};

export default TaskHolder;
