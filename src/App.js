import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import Sidebar from 'components/Sidebar';

function App() {
  const [activeSideMenu, setActiveSideMenu] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-dark-100">
          <div className="fixed right-4 bottom-4 z-50">
            <Tippy
              content="Settings"
              theme="light"
              trigger="mouseenter"
              position="Top"
            >
              <button
                type="button"
                className="bg-primary-100 text-secondary-100 hover:drop-shadow-xl text-2xl rounded-full p-2"
              >
                <FiSettings />
              </button>
            </Tippy>
          </div>
          {activeSideMenu ? (
            <Sidebar />
          ) : null}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
