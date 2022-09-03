import React from 'react'
import { AiFillCarryOut } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillPieChart } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="text-center md:text-left md:flex-col w-full md:w-60 md:h-screen md:fixed md:sidebar drop-shadow-md bg-secondary-100 dark:bg-dark-200">
      <div className="md:flex justify-center hidden ">
        <img src="../images/todo-logo.jpeg" alt="logo" className="w-2/3" />
      </div>
      <hr className="w-full" />
      <div className="flex flex-col justify-center">
        <span className="py-3 pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100 ">
          <AiFillCarryOut className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
          Projects
        </span>
        <span className="py-3 pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100">
          <AiFillCalendar className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
          Calendar
        </span>
        <span className="py-3 pl-2 font-medium hover:cursor-pointer text-secondary-300 dark:text-secondary-100">
          <AiFillPieChart className="inline-block mr-2 text-xl text-secondary-300 dark:text-primary-100" />
          Stats
        </span>
      </div>
    </div>
  );
}

export default Sidebar