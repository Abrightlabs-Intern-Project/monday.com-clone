import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  faAngleDown,
  faUserCircle,
  faHome,
  faSearch,
  faFilter,
  faSort,
  faEyeSlash,
  faLayerGroup,
  faArrowDown,
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
import "../../assets/styles/sprintBody.css";

export interface Task {
  id: string;
  name: string;
  owner: string;
  task?: string;
  type: string;
  priority: string;
  itemId: string;
  status?: string;
  actualSP?: string;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
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

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      name: "New task",
      owner: "",
      task: "New Task",
      type: "",
      priority: "",
      itemId: "",
      actualSP: "",
    };
    setTasks([...tasks, newTask]);
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedTasks({
      ...selectedTasks,
      [id]: !selectedTasks[id],
    });
  };

  const handleDeleteSelected = () => {
    setTasks(tasks.filter((task) => !selectedTasks[task.id]));
    setSelectedTasks({});
  };

  const handleChange = (id: string, field: keyof Task, value: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, [field]: value } : task))
    );
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
      <div className="container text-white">
        <div className="row mb-3">
          <div className="col">
            <div className="sprinthome">
              <FontAwesomeIcon icon={faHome} /> Main Table
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col d-flex">
              <div className="sprintButton">
                <button className="" onClick={handleAddTask}>
                  New Task
                  <FontAwesomeIcon icon={faAngleDown} className="buttonIcon" />
                </button>
              </div>
              <div className="searchSprint ms-3">
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
              <TableRow key={task.id}>
                <Checkbox>
                  <input
                    type="checkbox"
                    checked={!!selectedTasks[task.id]}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                </Checkbox>
                {/* <TableCell>
                  <div className="d-flex justify-item-center">
                    {editing[`${task.id}-task`] ? (
                      <Input
                        type="text"
                        value={task.task}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(task.id, "task", e.target.value)
                        }
                        onBlur={() => toggleEditing(task.id, "task", false)}
                        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                          if (e.key === "Enter") {
                            toggleEditing(task.id, "task", false);
                          }
                        }}
                      />
                    ) : (
                      <span
                        onClick={() => toggleEditing(task.id, "task", true)}
                      >
                        {task.task || "New task"}
                      </span>
                    )}
                    <div
                      className=""
                      onClick={() =>
                        toggleEditing(
                          task.id,
                          "task",
                          !editing[`${task.id}-task`]
                        )
                      }
                      style={{ top: "100", left: "0" }}
                    >
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                  </div>
                  {editing[`${task.id}-task`] && (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 10,
                        width: "70vw",
                        height: "60%",
                      }}
                    >
                      <TaskDetail
                        taskName={task.task}
                        task={task}
                        onSelectPriority={onSelectPriority}
                        onSelectStatus={onSelectStatus}
                        onSelectType={onSelectType}
                        handleChange={handleChange}
                      />
                    </div>
                  )}
                </TableCell> */}
                <TableCell>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {editing[`${task.id}-task`] ? (
                        <Input
                          type="text"
                          value={task.task}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleChange(task.id, "task", e.target.value)
                          }
                          onBlur={() => toggleEditing(task.id, "task", false)}
                          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === "Enter") {
                              toggleEditing(task.id, "task", false);
                            }
                          }}
                        />
                      ) : (
                        <span
                          onClick={() => toggleEditing(task.id, "task", true)}
                        >
                          {task.task || "New task"}
                        </span>
                      )}
                    </div>
                    <div
                      className="ms-2"
                      onClick={() =>
                        toggleEditing(
                          task.id,
                          "task",
                          !editing[`${task.id}-task`]
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
                    </div>
                  </div>
                  {editing[`${task.id}-task`] && (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 10,
                        width: "70vw",
                        height: "80%",
                        marginLeft: "50px",
                      }}
                    >
                      <TaskDetail
                        taskName={task.task}
                        task={task}
                        onSelectPriority={onSelectPriority}
                        onSelectStatus={onSelectStatus}
                        onSelectType={onSelectType}
                        handleChange={handleChange}
                      />
                    </div>
                  )}
                </TableCell>

                <Checkbox>
                  <div className="fs-5">
                    <FontAwesomeIcon icon={faUserCircle} />
                  </div>
                </Checkbox>
                <TableCell>
                  {currentEditingTaskId === task.id &&
                  currentEditingField === "status" &&
                  editing[`${task.id}-status`] ? (
                    <div style={{ position: "absolute", zIndex: 10 }}>
                      <TaskStatusList onSelect={onSelectStatus} />
                    </div>
                  ) : (
                    <span
                      onClick={() => toggleEditing(task.id, "status", true)}
                    >
                      {task.status || "Missing"}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {currentEditingTaskId === task.id &&
                  currentEditingField === "priority" &&
                  editing[`${task.id}-priority`] ? (
                    <div style={{ position: "absolute", zIndex: 10 }}>
                      <TaskPriorityList onSelect={onSelectPriority} />
                    </div>
                  ) : (
                    <span
                      onClick={() => toggleEditing(task.id, "priority", true)}
                    >
                      {task.priority || "Missing"}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {currentEditingTaskId === task.id &&
                  currentEditingField === "type" &&
                  editing[`${task.id}-type`] ? (
                    <div style={{ position: "absolute", zIndex: 10 }}>
                      <TaskTypeList onSelect={onSelectType} />
                    </div>
                  ) : (
                    <span onClick={() => toggleEditing(task.id, "type", true)}>
                      {task.type || "Missing"}
                    </span>
                  )}
                </TableCell>
                {/* <TableCell>
                  {editing[`${task.id}-actualSP`] ? (
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
                <TableCell>{task.id}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        {isAnyTaskSelected && (
          <Button onClick={handleDeleteSelected}>Delete</Button>
        )}
      </TableContainer>
    </div>
  );
};

export default TaskManager;
