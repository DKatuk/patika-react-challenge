import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import Calendar from "pages/Calendar";
import Projects from "pages/Projects";
import Stats from "pages/Stats";
import About from "pages/About";
import Profile from "pages/Profile";
import SignUp from "components/SignUp";
import { useRef } from "react";
import toast from "react-hot-toast";
import Todo from "pages/Todo";


function App() {
  // FETCHING TODOS
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://6322252d362b0d4e7dc97a30.mockapi.io/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((err) => console.log(err));
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  

  // SORTING TODOS BY DUE DATE - ASCENDING OR DESCENDING ORDER
  
  function sortByDescendingDate() {
    const descendingTodos = [...todos].sort((a, b) => {
      return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
    });
    setTodos(descendingTodos);
    
  }
  function sortByAscendingDate() {
    const ascendingTodos = [...todos].sort((a, b) => {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });
    setTodos(ascendingTodos);
  }
  // SORT TODOS BY CATEGORY
  function sortByCategory(e) {
    const categoryTodos = [...todos].filter((todo) => {
      return todo.category === e;
    });
    setTodos(categoryTodos);
  }
  

  // SIDEBAR TOGGLE
  const [activeSideMenu, setActiveSideMenu] = useState(true);
  const { innerWidth: width } = window;

  useEffect(() => {
    if (width < 768) {
      setActiveSideMenu(false);
    }
  }, [width]);

  function toggleSideMenu() {
    setActiveSideMenu(!activeSideMenu);
  }

  // LOGGING IN BY LOCAL STORAGE
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //TOAST NOT WORKING ??
  function handleSignUp() {
    if (
      nameRef.current.value !== "" ||
      surnameRef.current.value !== "" ||
      emailRef.current.value !== "" ||
      passwordRef.current.value !== ""
    ) {
      localStorage.setItem("name", nameRef.current.value);
      localStorage.setItem("surname", surnameRef.current.value);
      localStorage.setItem("email", emailRef.current.value);
      localStorage.setItem("password", passwordRef.current.value);
    } else {
      toast.error("Please fill in all fields");
    }
    window.location.reload();
  }
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  function logOut() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="App">
      {name && surname && email && password ? (
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
                <Navbar onClick={() => toggleSideMenu()} logOut={logOut} />
                <div className="block md:hidden">
                  {activeSideMenu ? <Sidebar /> : null}
                </div>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Projects
                        todos={todos}
                        setTodos={setTodos}
                        sortByDescendingDate={sortByDescendingDate}
                        sortByAscendingDate={sortByAscendingDate}
                        sortCategory={sortByCategory}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects />}
                  />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/stats" element={<Stats todos={todos} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/todo/:id" element={<Todo />} />
                  <Route path="*" element={<div>404</div>} />
                </Routes>
              </div>
              <div className="hidden md:block">
                {activeSideMenu ? <Sidebar /> : null}
              </div>
            </div>
          </div>
        </BrowserRouter>
      ) : (
        <SignUp
          handleSignUp={handleSignUp}
          nameRef={nameRef}
          surnameRef={surnameRef}
          emailRef={emailRef}
          passwordRef={passwordRef}
        />
      )}
    </div>
  );
}

export default App;
