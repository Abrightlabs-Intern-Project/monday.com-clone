import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "../../assets/styles/sprintBody.css";
import {
  faAngleDown,
  faCaretDown,
  faFilter,
  faHome,
  faLayerGroup,
  faSearch,
  faSort,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { addTask } from "../../features/rowTask/taskSlice";
import { useDispatch } from "react-redux";

const TaskBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleAddTask = () => {
    dispatch(
      addTask({
        name: "New task",
        owner: "",
        task: "",
        type: "",
        priority: "",
        itemId: "",
      })
    );
  };
  return (
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
  );
};

export default TaskBody;
