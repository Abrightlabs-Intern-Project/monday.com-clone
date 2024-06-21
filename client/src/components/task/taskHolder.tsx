import React from "react";
import TaskHeader from "./taskHeader";
import TaskBody from "./taskBody";
import TaskTable from "./taskTable";
import TaskStatusList from "./TaskStatusList";
import TaskDetail from "./TaskDetails";

const TaskHolder = () => {
  return (
    <div>
      <TaskHeader />
      {/* <TaskBody /> */}
      <TaskTable />
    </div>
  );
};

export default TaskHolder;
