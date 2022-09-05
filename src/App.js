import './App.css';
import {useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';

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
            </div>
            {activeSideMenu ? <Sidebar /> : null}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
