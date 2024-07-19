import React, { useState } from "react";
import "../assets/styles/Navigator.css";

import CottageIcon from "@mui/icons-material/Cottage";
import TaskIcon from "@mui/icons-material/Task";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import BugReportIcon from "@mui/icons-material/BugReport";
import HistoryIcon from "@mui/icons-material/History";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RouteIcon from "@mui/icons-material/Route";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { ClassNames } from "@emotion/react";

const Navigator = () => {
  const [show, setShow] = useState<boolean>(true);
  const [active, setActive] = useState<string>("home");
  return (
    <div className=" Navigator">
      <div className="Header">
        <div
          className={`d-flex align-items-center HeaderContent ${
            active === "home" ? "active" : ""
          }`}
          onClick={() => setActive("home")}
        >
          <CottageIcon
            sx={{
              color: "white",
              width: "30px",
              fontSize: "18px",
              background: "none",
            }}
          />
          <span className="ms-1 spanHeading">Home</span>
        </div>
        <div
          className={`d-flex align-items-center HeaderContent ${
            active === "mywork" ? "active" : ""
          }`}
          onClick={() => setActive("mywork")}
        >
          <TaskIcon
            sx={{
              color: "white",
              width: "30px",
              fontSize: "18px",
              background: "none",
            }}
          />
          <span className="ms-1 spanHeading">My work</span>
        </div>
      </div>
      <div className="Body">
        <div className="WorkSpace d-flex justify-content-between align-items-center">
          <div className="Team">
            <span className="text-white Tt">M</span>
          </div>
          <span style={{ marginLeft: "-95px", background: "inherit" }}>
            My Team
          </span>
          <div className="BodyIcon d-flex justify-content-between align-items-center">
            <div className="KeyArrow">
              <KeyboardArrowDownIcon
                sx={{
                  color: "white",
                  background: "none",
                  marginRight: "5px",
                  fontSize: "18px",
                }}
              />
            </div>
            <div className="KeyArrow">
              <MoreHorizIcon
                sx={{
                  color: "white",
                  background: "none",
                  marginRight: "5px",
                  fontSize: "18px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="SearchSpace d-flex justify-content-between mt-3">
          <div className="BarHolder align-items-center d-flex">
            <span>
              <SearchIcon
                sx={{ fontSize: "16px", background: "none" }}
                className="ms-2"
              />
            </span>
            <input type="text" className="SearchBar" />
          </div>
          <div className="AddIcon">
            <AddIcon
              sx={{ color: "white", marginTop: "2px", background: "inherit" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-between mt-3 HeaderContent teamContent"
          onClick={() => {
            setShow(!show);
            setActive("tasks");
          }}
        >
          <div className="teamHolder">
            {!show ? (
              <ArrowRightIcon sx={{ background: "inherit" }} />
            ) : (
              <ArrowDropDownIcon sx={{ background: "inherit" }} />
            )}
            <span className="head" style={{ fontSize: "small" }}>
              My Team
            </span>
          </div>
        </div>
        {show && (
          <div className="teamSubContent">
            <div
              className={`teamItem ${active === "tasks" ? "active" : ""}`}
              onClick={() => setActive("tasks")}
            >
              <SpaceDashboardIcon
                sx={{ fontSize: "16px", background: "inherit" }}
              />
              <span className="teamText">Task 1</span>
            </div>
            <div
              className={`teamItem ${active === "sprints" ? "active" : ""}`}
              onClick={() => setActive("sprints")}
            >
              <RouteIcon sx={{ fontSize: "16px", background: "inherit" }} />
              <span className="teamText">Sprints</span>
            </div>
            <div
              className={`teamItem ${active === "epics" ? "active" : ""}`}
              onClick={() => setActive("epics")}
            >
              <ViewInArIcon sx={{ fontSize: "16px", background: "inherit" }} />
              <span className="teamText">Epics</span>
            </div>
            <div
              className={`teamItem ${active === "bugs" ? "active" : ""}`}
              onClick={() => setActive("bugs")}
            >
              <BugReportIcon sx={{ fontSize: "16px", background: "inherit" }} />
              <span className="teamText">Bugs Queue</span>
            </div>
            <div
              className={`teamItem ${active === "retero" ? "active" : ""}`}
              onClick={() => setActive("retero")}
            >
              <HistoryIcon sx={{ fontSize: "16px", background: "inherit" }} />
              <span className="teamText">Retrospectives</span>
            </div>
            <div
              className={`teamItem ${active === "start" ? "active" : ""}`}
              onClick={() => setActive("start")}
            >
              <LibraryBooksIcon sx={{ fontSize: "16px" }} />
              <span className="teamText">Getting Started</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigator;
