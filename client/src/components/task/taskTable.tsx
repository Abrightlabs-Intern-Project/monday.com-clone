import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import "../../assets/styles/sprintBody.css";
import "../../assets/styles/TaskHeader.css";
import { Task } from "../../interfaces/Task";
import { useTask } from "../../context/TaskContext";
import {
  faAngleDown,
  faUserCircle,
  faHome,
  faSearch,
  faFilter,
  faSort,
  faEyeSlash,
  faLayerGroup,
  faArrowsUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  Input,
  Button,
  Checkbox,
} from "./taskTableStyles";
import TaskStatusList from "./TaskStatusList";
import TaskPriorityList from "./TaskPriorityList";
import TaskTypeList from "./TaskTypeList";
import UsersToTask from "./UsersToTask";
import {
  statusColors,
  priorityColors,
  typeColors,
} from "../../mockdata/backgroundColor";
import DisplayColumns from "./DisplayColumns";
import TaskDetail from "./TaskDetails";

const TaskManager: React.FC = () => {
  const { tasks, setTasks } = useTask();
  const [editing, setEditing] = useState<{ [key: string]: boolean }>({});
  const [selectedTasks, setSelectedTasks] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentEditingTaskId, setCurrentEditingTaskId] = useState<
    string | null
  >(null);
  const [currentEditingField, setCurrentEditingField] = useState<string | null>(
    null
  );
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [showDisplayColumns, setShowDisplayColumns] = useState<boolean>(false);

  // Sorting state
  const [sortKey, setSortKey] = useState<keyof Task>("taskId");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof Task) => {
    setSortKey(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortTasks = (
    tasks: Task[],
    sortKey: keyof Task,
    sortOrder: "asc" | "desc"
  ): Task[] => {
    return [...tasks].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const handleAddTask = async () => {
    const newTask: Task = {
      taskId: "",
      name: "New task",
      owner: "",
      status: "",
      type: "Missing",
      priority: "Missing",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteSelected = async () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => !selectedTasks[task.taskId])
    );
  };

  const handleChange = async (id: string, field: keyof Task, value: string) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === id ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedTasks({
      ...selectedTasks,
      [id]: !selectedTasks[id],
    });
  };

  const toggleEditing = (id: string, field: keyof Task, isEditing: boolean) => {
    setEditing({ ...editing, [`${id}-${field}`]: isEditing });
    if (isEditing) {
      setCurrentEditingTaskId(id);
      setCurrentEditingField(field);
    } else {
      setCurrentEditingTaskId(null);
      setCurrentEditingField(null);
    }
  };

  const onSelectStatus = (status: string) => {
    if (currentEditingTaskId) {
      handleChange(currentEditingTaskId, "status", status);
      setCurrentEditingTaskId(null);
      setCurrentEditingField(null);
    }
  };

  const onSelectPriority = (priority: string) => {
    if (currentEditingTaskId) {
      handleChange(currentEditingTaskId, "priority", priority);
      setCurrentEditingTaskId(null);
      setCurrentEditingField(null);
    }
  };

  const onSelectType = (type: string) => {
    if (currentEditingTaskId) {
      handleChange(currentEditingTaskId, "type", type);
      setCurrentEditingTaskId(null);
      setCurrentEditingField(null);
    }
  };

  const isAnyTaskSelected = Object.values(selectedTasks).some(Boolean);

  const toggleColumnVisibility = (column: string) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(column)
        ? prevHiddenColumns.filter((col) => col !== column)
        : [...prevHiddenColumns, column]
    );
  };

  return (
    <div className="task-manager">
      <div className="container text-white task-manager">
        <div className="row mb-3">
          <div className="col task-manager">
            <div className="sprinthome task-manager">
              <FontAwesomeIcon icon={faHome} /> Main Table
            </div>
          </div>
          <div className="row task-manager">
            <div className="col d-flex task-manager mt-3">
              <div
                className="sprintButton"
                style={{ backgroundColor: "rgb(24, 27, 52)" }}
              >
                <button className="" onClick={handleAddTask}>
                  New Task
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="buttonIcon"
                    style={{ backgroundColor: "inherit" }}
                  />
                </button>
              </div>
              <div
                className="searchSprint ms-3 mt-1 task-manager"
                style={{ backgroundColor: "rgb(24, 27, 52)" }}
              >
                <button
                  className="searchSprintButton"
                  onClick={toggleSearch}
                  style={{ backgroundColor: "rgb(24, 27, 52)" }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="iconSprint"
                    style={{ backgroundColor: "rgb(24, 27, 52)" }}
                  />
                </button>
                {!isOpen && (
                  <span style={{ backgroundColor: "rgb(24, 27, 52)" }}>
                    Search
                  </span>
                )}
                {isOpen && (
                  <input
                    type="text"
                    placeholder="Search in this board"
                    className="searchInput text-white"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    autoFocus
                  />
                )}
              </div>
              <div
                className="sprintPerson ms-3"
                style={{ backgroundColor: "rgb(24, 27, 52)" }}
              >
                <button className="sprintPersonButton">
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="iconSprint"
                    onClick={() => setShowDisplayColumns(!showDisplayColumns)}
                  />
                  Hide
                  {showDisplayColumns && (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 100,
                      }}
                    >
                      <DisplayColumns
                        hiddenColumns={hiddenColumns}
                        toggleColumnVisibility={toggleColumnVisibility}
                      />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3" style={{ backgroundColor: "rgb(24, 27, 52)" }}>
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <Checkbox>
                  <input type="checkbox" />
                </Checkbox>
                {!hiddenColumns.includes("Task") && (
                  <TableHeader onClick={() => handleSort("name")}>
                    Task{" "}
                    {sortKey === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                  </TableHeader>
                )}
                {!hiddenColumns.includes("Owner") && (
                  <TableHeader onClick={() => handleSort("owner")}>
                    Owner{" "}
                    {sortKey === "owner" && (sortOrder === "asc" ? "↑" : "↓")}
                  </TableHeader>
                )}
                {!hiddenColumns.includes("Status") && (
                  <TableHeader onClick={() => handleSort("status")}>
                    Status{" "}
                    {sortKey === "status" && (sortOrder === "asc" ? "↑" : "↓")}
                  </TableHeader>
                )}
                {!hiddenColumns.includes("Priority") && (
                  <TableHeader onClick={() => handleSort("priority")}>
                    Priority{" "}
                    {sortKey === "priority" &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </TableHeader>
                )}
                {!hiddenColumns.includes("Type") && (
                  <TableHeader onClick={() => handleSort("type")}>
                    Type{" "}
                    {sortKey === "type" && (sortOrder === "asc" ? "↑" : "↓")}
                  </TableHeader>
                )}
                {!hiddenColumns.includes("Item ID") && (
                  <TableHeader onClick={() => handleSort("taskId")}>
                    Item ID{" "}
                    {sortKey === "taskId" && (sortOrder === "asc" ? "↑" : "↓")}
                  </TableHeader>
                )}
              </TableRow>
            </thead>
            <tbody>
              {sortTasks(filteredTasks, sortKey || "taskId", sortOrder).map(
                (task) => (
                  <TableRow key={task.taskId}>
                    <Checkbox>
                      <input
                        type="checkbox"
                        checked={!!selectedTasks[task.taskId]}
                        onChange={() => handleCheckboxChange(task.taskId)}
                      />
                    </Checkbox>
                    {!hiddenColumns.includes("Task") && (
                      <TableCell bgColor="rgb(48, 50, 78)">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            {editing[`${task.taskId}-name`] ? (
                              <Input
                                type="text"
                                value={task.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                  handleChange(
                                    task.taskId,
                                    "name",
                                    e.target.value
                                  )
                                }
                                onBlur={() =>
                                  toggleEditing(task.taskId, "name", false)
                                }
                                onKeyPress={(
                                  e: KeyboardEvent<HTMLInputElement>
                                ) => {
                                  if (e.key === "Enter") {
                                    toggleEditing(task.taskId, "name", false);
                                  }
                                }}
                              />
                            ) : (
                              <span
                                onClick={() =>
                                  toggleEditing(task.taskId, "name", true)
                                }
                              >
                                {task.name || "New task"}
                              </span>
                            )}
                          </div>
                          <div
                            className="ms-2"
                            onClick={() =>
                              toggleEditing(
                                task.taskId,
                                "name",
                                !editing[`${task.taskId}-task`]
                              )
                            }
                          >
                            <FontAwesomeIcon
                              icon={faArrowsUpDownLeftRight}
                              onClick={() =>
                                setShowTaskDetails(!showTaskDetails)
                              }
                            />
                          </div>
                        </div>
                        {currentEditingTaskId === task.taskId &&
                          showTaskDetails && (
                            <div
                            // style={{
                            //   position: "absolute",
                            //   zIndex: 10,
                            //   width: "70vw",
                            //   height: "80%",
                            //   marginLeft: "50px",
                            // }}
                            >
                              <TaskDetail
                                taskName={task.name}
                                task={task}
                                open={showTaskDetails}
                                onClose={() => setShowTaskDetails(false)}
                                onSelectPriority={onSelectPriority}
                                onSelectStatus={onSelectStatus}
                                onSelectType={onSelectType}
                                handleChange={handleChange}
                              />
                            </div>
                          )}
                      </TableCell>
                    )}
                    {!hiddenColumns.includes("Owner") && (
                      <TableCell bgColor="rgb(48, 50, 78)">
                        {currentEditingTaskId === task.taskId &&
                        currentEditingField === "owner" &&
                        editing[`${task.taskId}-owner`] ? (
                          <>
                            <span
                              onClick={() =>
                                toggleEditing(task.taskId, "owner", false)
                              }
                            >
                              {<FontAwesomeIcon icon={faUserCircle} />}
                            </span>
                            <div
                              style={{
                                position: "absolute",
                                zIndex: 100,
                                marginTop: "25px",
                                width: "15%",
                              }}
                            >
                              <UsersToTask taskId={task.taskId} />
                            </div>
                          </>
                        ) : (
                          <span
                            onClick={() =>
                              toggleEditing(task.taskId, "owner", true)
                            }
                          >
                            {<FontAwesomeIcon icon={faUserCircle} />}
                          </span>
                        )}
                      </TableCell>
                    )}
                    {!hiddenColumns.includes("Status") && (
                      <TableCell bgColor={statusColors[task.status]}>
                        {currentEditingTaskId === task.taskId &&
                        currentEditingField === "status" &&
                        editing[`${task.taskId}-status`] ? (
                          <div style={{ position: "absolute", zIndex: 10 }}>
                            <TaskStatusList onSelect={onSelectStatus} />
                          </div>
                        ) : (
                          <span
                            onClick={() =>
                              toggleEditing(task.taskId, "status", true)
                            }
                            style={{
                              background: `${statusColors[task.status]}`,
                            }}
                          >
                            {task.status || "Missing"}
                          </span>
                        )}
                      </TableCell>
                    )}
                    {!hiddenColumns.includes("Priority") && (
                      <TableCell bgColor={priorityColors[task.priority]}>
                        {currentEditingTaskId === task.taskId &&
                        currentEditingField === "priority" &&
                        editing[`${task.taskId}-priority`] ? (
                          <div style={{ position: "absolute", zIndex: 10 }}>
                            <TaskPriorityList onSelect={onSelectPriority} />
                          </div>
                        ) : (
                          <span
                            onClick={() =>
                              toggleEditing(task.taskId, "priority", true)
                            }
                            style={{
                              background: `${priorityColors[task.priority]}`,
                            }}
                          >
                            {task.priority || "Missing"}
                          </span>
                        )}
                      </TableCell>
                    )}
                    {!hiddenColumns.includes("Type") && (
                      <TableCell bgColor={typeColors[task.type]}>
                        {currentEditingTaskId === task.taskId &&
                        currentEditingField === "type" &&
                        editing[`${task.taskId}-type`] ? (
                          <div style={{ position: "absolute", zIndex: 10 }}>
                            <TaskTypeList onSelect={onSelectType} />
                          </div>
                        ) : (
                          <span
                            onClick={() =>
                              toggleEditing(task.taskId, "type", true)
                            }
                            style={{ background: `${typeColors[task.type]}` }}
                          >
                            {task.type || "Missing"}
                          </span>
                        )}
                      </TableCell>
                    )}
                    {!hiddenColumns.includes("Item ID") && (
                      <TableCell bgColor="rgb(48, 50, 78)">
                        {task.taskId}
                      </TableCell>
                    )}
                  </TableRow>
                )
              )}
            </tbody>
          </Table>
          {isAnyTaskSelected && (
            <Button onClick={handleDeleteSelected}>Delete</Button>
          )}
        </TableContainer>
      </div>
    </div>
  );
};

export default TaskManager;
