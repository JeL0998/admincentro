import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBus, faBell } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ changePage, currentPage }) {
  return (
    <nav className="bg-gray-800 p-3 text-white h-full min-h-screen w-64 fixed">
      <ul className="p-2 mt-5 space-y-5">
        <li
          className={`${
            currentPage === "Home" ? "bg-blue-600" : ""
          } p-2 rounded cursor-pointer hover:bg-blue-600 transition duration-300`}
          onClick={() => changePage("Home")}
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
        </li>
        <li
          className={`${
            currentPage === "Stops" ? "bg-blue-600" : ""
          } p-2 rounded cursor-pointer mt-2 hover:bg-blue-600 transition duration-300`}
          onClick={() => changePage("Stops")}
        >
          <FontAwesomeIcon icon={faBus} className="mr-2" /> Stops
        </li>
        <li
          className={`${
            currentPage === "Announcement" ? "bg-blue-600" : ""
          } p-2 rounded cursor-pointer mt-2 hover:bg-blue-600 transition duration-300`}
          onClick={() => changePage("Announcement")}
        >
          <FontAwesomeIcon icon={faBell} className="mr-2" /> Announcement
        </li>
      </ul>
    </nav>
  );
}
