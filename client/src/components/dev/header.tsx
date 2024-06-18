import React, { useState } from "react";
import "../../assets/styles/header.css";
import dev from "../../assets/images/dev.jpeg";
import DropMenu from "./dropMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBoltLightning,
  faPuzzlePiece,
  faQuestionCircle,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="bcg">
      <div className="container m-0">
        <div className="row d-flex align-items-center">
          <div className="col-2 col-md-2 col-lg-2 col-sm-2">
            <div className="Hidden">
              <button onClick={() => setShow(!show)}>☰</button>
              {show && (
                <div className="DropMenu">
                  <DropMenu />
                </div>
              )}
            </div>
          </div>
          <div className="col-8 d-flex align-items-center">
            <div className="LogoHolder me-2">
              <img src={dev} alt="/" className="img-fluid" />
            </div>
            <div className="DevText me-3">
              <p className="fst-normal">
                <span className="fw-bolder">monday</span> Dev
              </p>
            </div>
            <div className="plans">
              <p>✦See plans</p>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end icons">
            <div className="me-3 ms-2">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="me-3 ms-2">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div className="me-3 ms-2">
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </div>
            <div className="me-3 ms-2">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="me-3 ms-2">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </div>
            <div className="ms-5">
              <FontAwesomeIcon icon={faBoltLightning} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
