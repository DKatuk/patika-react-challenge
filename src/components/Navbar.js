import React, {useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ onClick, logOut }) => {
  const [profile, setProfile] = useState(false);
  function clickProfile() {
    setProfile(!profile);
  }

  return (
    <div>
      <nav className="flex justify-between w-full h-10 text-secondary-300 dark:bg-dark-100">
        <Tippy
          content="Menu"
          theme="light"
          placement="bottom-start"
          trigger="mouseenter"
        >
          <button onClick={onClick} className="flex items-center">
            <AiOutlineMenu className="inline-block ml-6 text-2xl text-secondary-300 dark:text-secondary-100" />
          </button>
        </Tippy>
        <div className="w-24 md:hidden flex items-center ml-2">
          <img src="../images/todo-logo.jpeg" alt="logo" />
        </div>
        <div className="flex items-center mr-2">
          <Tippy
            content="logout"
            theme="light"
            placement="bottom"
            trigger="mouseenter"
          >
            <NavLink to="/">
              <button onClick={clickProfile} className="rounded-full w-8 mr-4 ">
                <img
                  src="../images/profile-default.jpeg"
                  alt="profile"
                  className="hover:cursor-pointer"
                />
              </button>
            </NavLink>
          </Tippy>
        </div>
      </nav>
      {profile ? (
        <button
          onClick={logOut}
          className="fixed right-0 border px-4 mr-2 rounded-lg text-secondary-300 border-secondary-300"
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
