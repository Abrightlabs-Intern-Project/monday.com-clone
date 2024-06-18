import React from "react";
import "../../assets/styles/homeholder.css";
import AccordionCard from "./dropDownCard";
import WorkSpace from "./workspace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faComment } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./sidebar";

const HomeHolder = () => {
  return (
    <div className="container HomeHolder m-0 text-white">
      <div className="row"></div>
      <div className="row d-flex align-items-center headHolder mb-3 p-1 mt-3">
        <div className="col">
          <p>
            Good Morning, JK
            <br />
            Quickly access your recent boards, Inbox and workspaces
          </p>
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          <div className="me-3">
            <p className="spl">
              <FontAwesomeIcon icon={faComment} /> Give feedback
            </p>
          </div>
          <div className="" style={{ marginTop: "-15px" }}>
            <button className="custom">
              <FontAwesomeIcon icon={faBoltLightning} className="me-2" />
              Quick Access
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-12">
              <AccordionCard />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <WorkSpace />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 mb-3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default HomeHolder;
