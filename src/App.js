import './App.css';
import {useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Calendar from 'pages/Calendar';
import Projects from 'pages/Projects';
import Stats from 'pages/Stats';
import About from 'pages/About';
import Profile from 'pages/Profile';

function App() {
  const [activeSideMenu, setActiveSideMenu] = useState(true); 
  const { innerWidth: width} = window;
  useEffect(() => {
    if (width < 768) {
      setActiveSideMenu(false);
    }
  }, [width]);
  
  function toggleSideMenu() {
    setActiveSideMenu(!activeSideMenu);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-dark-100">
          <div className="fixed right-4 bottom-4 z-50">
            <Tippy
              content="Settings"
              theme="light"
              trigger="mouseenter"
              placement="top"
            >
              <button
                type="button"
                className="bg-primary-100 text-secondary-100 hover:drop-shadow-xl text-2xl rounded-full p-2"
              >
                <FiSettings />
              </button>
            </Tippy>
          </div>
          <div className="flex flex-col w-full md:flex-row">
            <div className="md:order-last w-full">
              <Navbar onClick={toggleSideMenu} />
              <div className="block md:hidden">
                {activeSideMenu ? <Sidebar /> : null}
              </div>
              <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<div>404</div>} />
              </Routes>
            </div>
            <div className="hidden md:block">
              {activeSideMenu ? <Sidebar /> : null}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
