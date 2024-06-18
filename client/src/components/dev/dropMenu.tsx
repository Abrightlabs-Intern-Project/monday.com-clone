import React from "react";
import "../../assets/styles/dropmenu.css";
import dev from "../../assets/images/dev.jpeg";
import crm from "../../assets/images/monday-crm.jpeg";
import mngmnt from "../../assets/images/work.png";
const DropMenu = () => {
  return (
    <div className="drop">
      <div className="container m-3 p-0 ">
        <div className=" row fw-bolder fs-6">
          <p className="col-12 mt-2"> Installed products</p>
        </div>
        <div className="row mb-5">
          <div className="work col-6 col-md-6 col-lg-6 col-sm-6 ms-2 text-center p-3">
            <img src={mngmnt} alt="/" className="img-fluid images" />
            <p className="imag-text text-center">
              Work
              <br /> Management
            </p>
          </div>
          <div className=" dev col-6 col-md-6 col-lg-6 col-sm-6 ms-2 text-center p-3">
            <img src={dev} alt="/" className="img-fluid devImg" />
            <p className="imag-text text-center">Dev</p>
          </div>
          <div className=" dev col-6 col-md-6 col-lg-6 col-sm-6 ms-2 text-center p-3">
            <img src={crm} alt="/" className="img-fluid CrmImg" />
            <p className="imag-text text-center">CRM</p>
          </div>
        </div>
        <div className="border mb-3"></div>
        <p className="mb-3 text-start text"> Explore more products</p>
        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default DropMenu;
