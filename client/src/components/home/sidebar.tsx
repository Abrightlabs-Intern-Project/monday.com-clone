import React from "react";
import "../../assets/styles/sidebar.css";
import template from "../../assets/images/template.png";
import rocket from "../../assets/images/rocket.jpg";
import help from "../../assets/images/helpcenter.jpg";
const SideBar = () => {
  return (
    <div className="container">
      <div className="wrapper mt-4">
        <div className="row text-white p-2 barHolder text-center mb-3">
          <div className="templateHolder d-flex">
            <div className="w-100 h-100">
              <img src={template} alt="/" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <p>
              Boost your workflow in minutes with
              <br /> ready-made templates
            </p>
            <p>
              <button className="customTemp"> Explore templates</button>
            </p>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="text-center ">
            <p className="fs-6">Learn & get inspired</p>
          </div>
        </div>
        <div className="row help mb-3">
          <div className="d-flex justify-content-between">
            <div className="w-25  me-3">
              <img src={rocket} alt="/" className="img-fluid rounded h-75" />
            </div>
            <div className="fsize">
              <div className=" fw-bold">Getting started</div>
              <div className="">Learn how monday.com works</div>
            </div>
          </div>
        </div>
        <div className="row help">
          <div className="d-flex justify-content-between">
            <div className="w-25  me-3">
              <img src={help} alt="/" className="img-fluid rounded h-75" />
            </div>
            <div className="fsize">
              <div className=" fw-bold">Help center</div>
              <div className="">Learn and get support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
