import React from "react";
import "../../assets/styles/NavBarL.css";

import logo from "../../assets/images/dev.png";

import { Apps } from "@mui/icons-material";
import DiamondIcon from "@mui/icons-material/Diamond";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import ExtensionIcon from "@mui/icons-material/Extension";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

const Navbar = () => {
  return (
    <div className="Navbar d-flex align-items-center justify-content-between">
      <div className="left-bar d-flex align-center">
        <div className="ms-2   me-3">
          <Apps sx={{ color: "white" }} />
        </div>
        <div className="">
          <img src={logo} className="img-fluid logoImage" />
          <span className="fw-light ms-1">
            <span className="Name"> monday</span> dev
          </span>
        </div>
        <div className="ButtonHolder ms-2">
          <button className="navbarButton">
            <DiamondIcon
              sx={{
                fontSize: "14px",
                color: "rgb(11, 170, 103)",
                marginRight: "5px",
                background: "none",
              }}
              className="ButtonHolder"
            />
            See plans
          </button>
        </div>
      </div>
      <div className="right-bar d-flex align-items-center ">
        <div className="icons me-1">
          <NotificationsIcon
            sx={{ color: "white", fontSize: "18px", background: "none" }}
          />
        </div>
        <div className=" icons me-1">
          <MailOutlineIcon
            sx={{ color: "white", fontSize: "18px", background: "none" }}
          />
        </div>
        <div className="icons me-1">
          <PersonAddIcon
            sx={{ color: "white", fontSize: "18px", background: "none" }}
          />
        </div>
        <div className=" icons me-1">
          <ExtensionIcon
            sx={{ color: "white", fontSize: "18px", background: "none" }}
          />
        </div>
        <div className=" icons me-2">
          <ApartmentOutlinedIcon
            sx={{ color: "white", fontSize: "18px", background: "none" }}
          />
        </div>
        <div className="d-flex  align-items-center">
          <span className="Sepration"></span>
          <div className=" icons me-1">
            <SearchIcon
              sx={{ color: "white", fontSize: "18px", background: "none" }}
            />
          </div>
          <div className="icons me-1">
            <HelpIcon
              sx={{ color: "white", fontSize: "18px", background: "none" }}
            />
          </div>
          <div className="ProfileHolder">
            <img
              src="https://cdn.monday.com/images/logos/monday_logo_icon.png"
              className="img-fluid monday"
            />
            <img
              src="https://files.monday.com/apse2/photos/61339127/thumb/61339127-user_photo_initials_2024_05_24_06_43_53.png?1716533033"
              className="img-fluid profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
