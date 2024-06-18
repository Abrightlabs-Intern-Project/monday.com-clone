import React from "react";
import "../../assets/styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faTasks,
  faClock,
  faPen,
  faBug,
  faClipboardList,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  label: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

const icons: { [key: string]: any } = {
  roadmap: faMap,
  feature: faTasks,
  sprint: faClock,
  retrospective: faPen,
  bug: faBug,
  project: faClipboardList,
  release: faCalendarCheck,
};

const Card: React.FC<CardProps> = ({ label, icon, selected, onClick }) => {
  return (
    <div className={`card ${selected ? "selected" : ""}`} onClick={onClick}>
      <div className="card-icon">
        <FontAwesomeIcon icon={icons[icon]} />
      </div>
      <div className="card-label">{label}</div>
      {selected && <div className="card-check">&#10003;</div>}
    </div>
  );
};

export default Card;
