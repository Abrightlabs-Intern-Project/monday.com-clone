import React from "react";
import SprintTable from "./sprintTable";
import SprintHeader from "./sprintHeader";
import SprintBody from "./sprintBody";

const SprintHolder = () => {
  return (
    <div className="text-white">
      <SprintHeader />
      {/* <SprintBody /> */}
      <SprintTable />
    </div>
  );
};

export default SprintHolder;
