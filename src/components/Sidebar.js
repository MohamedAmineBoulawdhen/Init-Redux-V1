import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faRectangleList,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <h1>To Do</h1>
        <hr />
        <ul>
          {" "}
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faRectangleList} /> ALL
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faClipboardList} /> PLANNED
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCheckCircle} /> COMPLETED
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
