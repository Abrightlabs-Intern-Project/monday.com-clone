import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import axios from "axios";
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
import TaskDetail from "./TaskDetails";
import UsersToTask from "./UsersToTask";

import {
  statusColors,
  priorityColors,
  typeColors,
} from "../../mockdata/backgroundColor";

const TaskManager: React.FC = () => {
  //const [tasks, setTasks] = useState<Task[]>(taskList);
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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };
    fetchTasks();
  }, []);

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

    // try {
    //   const response = await axios.post("http://localhost:3000/tasks", newTask);
    //   newTask.taskId = response.data;
    //   setTasks((prevTasks) => [...prevTasks, newTask]);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("There was an error adding the task!", error);
    // }
  };

  const handleDeleteSelected = async () => {
    // const idsToDelete = Object.keys(selectedTasks).filter(
    //   (id) => selectedTasks[id]
    // );
    setTasks((prevTasks) =>
      prevTasks.filter((task) => !selectedTasks[task.taskId])
    );
    // try {
    //   await axios.delete("http://localhost:3000/tasks", {
    //     data: { ids: idsToDelete },
    //   });
    //   setTasks((prevTasks) =>
    //     prevTasks.filter((task) => !selectedTasks[task.taskId])
    //   );
    //   setSelectedTasks({});
    // } catch (error) {
    //   console.error("There was an error deleting the tasks!", error);
    // }
  };
  const handleChange = async (id: string, field: keyof Task, value: string) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === id ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);

    // const updatedTask = updatedTasks.find((task) => task.taskId === id);
    // if (updatedTask) {
    //   try {
    //     await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);
    //   } catch (error) {
    //     console.error("There was an error updating the task!", error);
    //   }
    // }
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

  return (
    <div className="task-manager">
      <div className="container text-white task-manager">
        <div className="row mb-3">
          <div className="col task-manager">
            <div className="sprinthome task-manager">
              <FontAwesomeIcon icon={faHome} /> Main Table
            </div>
          </div>
          <div className="row task-manager ">
            <div className="col d-flex task-manager mt-3">
              <div className="sprintButton">
                <button className="" onClick={handleAddTask}>
                  New Task
                  <FontAwesomeIcon icon={faAngleDown} className="buttonIcon" />
                </button>
              </div>
              <div className="searchSprint ms-3 task-manager">
                <button className="searchSprintButton" onClick={toggleSearch}>
                  <FontAwesomeIcon icon={faSearch} className="iconSprint" />
                </button>
                {!isOpen && <span>Search</span>}
                {isOpen && (
                  <input
                    type="text"
                    placeholder="Search in this board"
                    className="searchInput"
                    autoFocus
                  />
                )}
              </div>
              <div className="sprintPerson ms-3">
                <button className="sprintPersonButton">
                  <FontAwesomeIcon icon={faUserCircle} className="iconSprint" />
                  Person
                </button>
              </div>
              <div className="sprintPerson ms-3">
                <button className="sprintPersonButton">
                  <FontAwesomeIcon icon={faFilter} className="iconSprint" />
                  Filter
                </button>
              </div>
              <div className="sprintPerson ms-3">
                <button className="sprintPersonButton">
                  <FontAwesomeIcon icon={faSort} className="iconSprint" />
                  Sort
                </button>
              </div>
              <div className="sprintPerson ms-3">
                <button className="sprintPersonButton">
                  <FontAwesomeIcon icon={faEyeSlash} className="iconSprint" />
                  Hide
                </button>
              </div>
              <div className="sprintPerson ms-3">
                <button className="sprintPersonButton">
                  <FontAwesomeIcon icon={faLayerGroup} className="iconSprint" />
                  Group by
                </button>
              </div>
              <div className="sprintPerson ms-3">
                <button className="sprintPersonButton">...</button>
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
                <TableHeader>Task</TableHeader>
                <TableHeader>Owner</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Priority</TableHeader>
                <TableHeader>Type</TableHeader>
                {/* <TableHeader>Actual SP</TableHeader> */}
                <TableHeader>Item ID</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TableRow key={task.taskId}>
                  <Checkbox>
                    <input
                      type="checkbox"
                      checked={!!selectedTasks[task.taskId]}
                      onChange={() => handleCheckboxChange(task.taskId)}
                    />
                  </Checkbox>
                  <TableCell bgColor="rgb(48, 50, 78)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        {editing[`${task.taskId}-name`] ? (
                          <Input
                            type="text"
                            value={task.name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange(task.taskId, "name", e.target.value)
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
                        <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
                      </div>
                    </div>
                    {editing[`${task.taskId}-task`] && (
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 10,
                          width: "70vw",
                          height: "80%",
                          marginLeft: "50px",
                        }}
                      >
                        {/* <TaskDetail
                          taskName={task.name}
                          task={task}
                          onSelectPriority={onSelectPriority}
                          onSelectStatus={onSelectStatus}
                          onSelectType={onSelectType}
                          handleChange={handleChange}
                        /> */}
                      </div>
                    )}
                  </TableCell>

                  <Checkbox>
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
                  </Checkbox>
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
                        style={{ background: `${statusColors[task.status]}` }}
                      >
                        {task.status || "Missing"}
                      </span>
                    )}
                  </TableCell>
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
                  <TableCell bgColor={typeColors[task.type]}>
                    {currentEditingTaskId === task.taskId &&
                    currentEditingField === "type" &&
                    editing[`${task.taskId}-type`] ? (
                      <div style={{ position: "absolute", zIndex: 10 }}>
                        <TaskTypeList onSelect={onSelectType} />
                      </div>
                    ) : (
                      <span
                        onClick={() => toggleEditing(task.taskId, "type", true)}
                        style={{ background: `${typeColors[task.type]}` }}
                      >
                        {task.type || "Missing"}
                      </span>
                    )}
                  </TableCell>
                  {/* <TableCell>
                  {editing[${task.id}-actualSP] ? (
                    <Input
                      type="text"
                      value={task.task}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange(task.id, "actualSP", e.target.value)
                      }
                      onBlur={() => toggleEditing(task.id, "actualSP", false)}
                      onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                          toggleEditing(task.id, "actualSP", false);
                        }
                      }}
                    />
                  ) : (
                    <span
                      onClick={() => toggleEditing(task.id, "actualSP", true)}
                    >
                      {task.actualSP || "1"}
                    </span>
                  )}
                </TableCell> */}
                  <TableCell bgColor="rgb(48, 50, 78)">{task.taskId}</TableCell>
                </TableRow>
              ))}
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
