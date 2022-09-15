import React from 'react'
import { AiFillCarryOut } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillPieChart } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
      <div className="text-center md:text-left md:flex-col w-full md:w-60 md:h-screen drop-shadow-md dark:bg-dark-200">
        <div className="md:flex justify-center hidden pt-2 ">
          <img src="../images/todo-logo.jpeg" alt="logo" className="w-2/3" />
        </div>
        <hr className="md:hidden block w-full" />
        <ul className="flex flex-col justify-center">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
            to="/projects"
          >
            <li className="py-3 md:pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100 ">
              <AiFillCarryOut className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
              Projects
            </li>
          </NavLink>
          <li className="py-3 md:pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100">
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline" }
                  : { textDecoration: "none" }
              }
              to="/calendar"
            >
              <AiFillCalendar className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
              Calendar
            </NavLink>
          </li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
            to="/stats"
          >
            <li className="py-3 md:pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100">
              <AiFillPieChart className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
              Stats
            </li>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
            to="/about"
          >
            <li className="py-3 md:pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100 ">
              <AiFillBook className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
              About
            </li>
          </NavLink>
        </ul>
      </div>
  );
}

export default Sidebar