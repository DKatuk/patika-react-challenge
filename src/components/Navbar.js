import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

const Navbar = ({ onClick }) => {
  return (
    <div className="flex justify-between w-full h-10 text-secondary-300 dark:bg-dark-200">
      <Tippy
        content="Menu"
        theme="light"
        placement="bottom-start"
        trigger="mouseenter"
      >
        <button onClick={onClick} className="flex items-center">
          <AiOutlineMenu className="inline-block ml-2 text-2xl text-secondary-300 dark:text-secondary-100" />
        </button>
      </Tippy>
      <div className="w-24 md:hidden flex items-center ml-12">
        <img src="../images/todo-logo.jpeg" alt="logo" />
      </div>
      <div className="flex items-center mr-2">
        <Tippy
          content="Notifications"
          theme="light"
          placement="bottom"
          trigger="mouseenter"
        >
          <button>
            <AiOutlineBell className="inline-block mr-2 text-2xl hover:cursor-pointer text-secondary-300 dark:text-secondary-100" />
          </button>
        </Tippy>
        <Tippy
          content="Profile"
          theme="light"
          placement="bottom"
          trigger="mouseenter"
        >
          <button className="rounded-full w-8 mr-2 ">
            <img
              src="../images/profile-default.jpeg"
              alt="profile"
              className="hover:cursor-pointer"
            />
          </button>
        </Tippy>
        <span className="hidden md:block dark:text-secondary-100"> Hi, Dilara!</span>
      </div>
    </div>
  );
};

export default Navbar;
