import NewItem from "components/NewItem";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

const Projects = ({
  todos,
  setTodos,
  sortByDescendingDate,
  sortByAscendingDate,
  sortCategory,
}) => {
  const [newItemMount, setNewItemMount] = useState(false);
  const [taskStatus, setTaskStatus] = useState({});

  function handleNewItem() {
    setNewItemMount(!newItemMount);
  }
  function handleOpen(e) {
    console.log(e);
    setTaskStatus((taskStatus) => ({
      ...taskStatus,
      [e]: !taskStatus[e],
    }));
    console.log("ts", taskStatus);
  }
  const refStatusPopUp = useRef(null);
  const refTwo = useRef(null);

  useEffect(()=>{
    function handleClickOutside(e) {
      // console.log("e", e);
      // console.log("ref", refStatusPopUp.current);
      // console.log("ref2", refTwo.current);
      if (
        refStatusPopUp.current && !refTwo.current.contains(e.target) &&
        !refStatusPopUp.current.contains(e.target)
      ) {
        setTaskStatus(!taskStatus);
      }
    }
     document.addEventListener("click", handleClickOutside, true);
     return ()=>{
        document.removeEventListener("click", handleClickOutside, true);
     }

  })
  


  const [newTask, setNewTask] = useState({});
  const [newCategory, setNewCategory] = useState("Work");
  const [newDueDate, setNewDueDate] = useState({});
  
  function submitTask(e) {
    if (newTask.length >= 3) {
       const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           content: newTask,
           isCompleted: false,
           category: newCategory,
           dueDate: newDueDate,
         }),
       };
       setTodos([
         ...todos,
         {
           content: newTask,
           isCompleted: false,
           category: newCategory,
           dueDate: newDueDate,
         },
       ]);
       fetch(
         `https://6322252d362b0d4e7dc97a30.mockapi.io/todos`,
         requestOptions
       ).then((response) => response.json());
    } else {
      return false;
    }
    e.preventDefault();
     
  }
  function setInProgress(e) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted: "inProgress" }),
    };
    let updatedArray = todos.filter((todo)=>todo.id !== e.id)
    const newTodoObject = {...e, isCompleted: "inProgress"}
    updatedArray.push(newTodoObject);
    setTodos(updatedArray)
    fetch(
      `https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${e.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log("put ddataa", data));
  }
  function setDone(e) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted: "Done" }),
    };
    let updatedArray = todos.filter((todo) => todo.id !== e.id);
    const newTodoObject = { ...e, isCompleted: "Done" };
    updatedArray.push(newTodoObject);
    setTodos(updatedArray);
    fetch(
      `https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${e.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log("put ddataa", data));
  }
  function deleteTodo(e) {
    setTodos(todos.filter((todo) => todo.id !== e.id));
    fetch(`https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${e.id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }


  return (
    <div className="m-2 ">
      <div className="flex justify-between items-center my-4 mx-6">
        <div>
          <span className="mr-2">
            <label
              htmlFor="category"
              className="text-secondary-300 dark:text-secondary-100 mb-2 mr-4"
            >
              <b>Sort By Category:</b>
            </label>
            <select
              name="languages"
              onChange={(e) => sortCategory(e.target.value)}
              id="category"
              className="rounded-lg md:w-44 h-8 md:h-auto md:scale-75 w-32 text-sm md:text-base dark:bg-secondary-200 dark:text-secondary-100 appearance-none"
              defaultValue="Work"
            >
              <option value="Work">Work</option>
              <option value="Study">Study </option>
              <option value="Shopping">Shopping</option>
              <option value="Friends">Friends </option>
              <option value="Meeting">Meeting </option>
            </select>
          </span>
          <Tippy
            content="Sort by descending date"
            theme="light"
            trigger="mouseenter"
            placement="bottom"
          >
            <button type="button" onClick={sortByDescendingDate}>
              <AiOutlineArrowDown className="mr-2 dark:text-secondary-100" />
            </button>
          </Tippy>
          <Tippy
            content="Sort by ascending date"
            theme="light"
            trigger="mouseenter"
            placement="bottom"
          >
            <button type="button" onClick={sortByAscendingDate}>
              <AiOutlineArrowUp className="mr-2 dark:text-secondary-100" />
            </button>
          </Tippy>
        </div>
        <button
          onClick={handleNewItem}
          className="float-right flex items-center text-xs md:text-base md:py-1 w-16 md:w-max mt-4 px-4 rounded-lg border border-primary-100 dark:border-secondary-100 bg-secondary-100 dark:bg-secondary-200 hover:bg-primary-100 dark:hover:bg-primary-100 text-primary-100 dark:text-secondary-100 hover:text-secondary-100"
        >
          <AiOutlinePlusCircle className="mr-2 hidden md:flex dark:text-secondary-100" />
          <p>New Item</p>
        </button>
      </div>
      <div>
        {newItemMount ? (
          <NewItem
            setNewTask={setNewTask}
            submitTask={submitTask}
            setNewCategory={setNewCategory}
            setNewDueDate={setNewDueDate}
          />
        ) : null}
      </div>
      <hr className="m-4" />
      <div className="m-5 md:grid grid-cols-3 md:divide-x">
        <div>
          <h1 className="text-xl font-bold text-center dark:text-secondary-100">
            Todos
          </h1>
          <hr />
          {todos.map(
            (todo) =>
              todo.isCompleted === false && (
                <Link to={`/todo/${todo.id}`} key={todo.id}>
                  <div className="h-28 relative border hover:cursor-pointer shadow-sm rounded-lg p-4 m-2 bg-secondary-100 dark:bg-secondary-200 dark:border-secondary-200 dark:text-secondary-100">
                    <div className="flex justify-between">
                      <div className="flex flex-row">
                        <p className="rounded-xl bg-primary-200 text-secondary-100 text-xs lg:text-base px-4 mr-2 ">
                          {todo.category}
                        </p>
                        <p className="rounded-xl bg-primary-100 text-secondary-100 text-xs lg:text-base px-4 ">
                          {todo.dueDate}
                        </p>
                      </div>
                      <button
                        ref={refStatusPopUp}
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpen(todo.id);
                        }}
                        className="float-right"
                      >
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div className="flex flex-col my-1 line-clamp-2">
                      <p>{todo.content}</p>
                    </div>
                    {taskStatus[todo.id] ? (
                      <span
                        ref={refTwo}
                        className="bg-secondary-100 dark:bg-secondary-200 flex flex-col border border-primary-100 px-2 absolute top-9 z-50 right-5 shadow-sm rounded-lg"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setInProgress(todo);
                          }}
                        >
                          In Progress
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setDone(todo);
                          }}
                        >
                          Done
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteTodo(todo);
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    ) : null}
                  </div>
                </Link>
              )
          )}
        </div>
        <div>
          <h1 className="text-xl font-bold text-center dark:text-secondary-100">
            In Progress
          </h1>
          <hr />
          {todos.map(
            (todo) =>
              todo.isCompleted === "inProgress" && (
                <Link to={`/todo/${todo.id}`} key={todo.id}>
                  <div className="h-28 relative border hover:cursor-pointer shadow-sm rounded-lg p-4 m-2 bg-secondary-100 dark:bg-secondary-200 dark:border-secondary-200 dark:text-secondary-100">
                    <div className="flex justify-between">
                      <div className="flex flex-row">
                        <p className="rounded-xl bg-primary-200 text-secondary-100 text-xs lg:text-base px-4 mr-2 ">
                          {todo.category}
                        </p>
                        <p className="rounded-xl bg-primary-100 text-secondary-100 text-xs lg:text-base px-4 ">
                          {todo.dueDate}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpen(todo.id);
                        }}
                        ref={refStatusPopUp}
                        className="float-right"
                      >
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div className="flex flex-col my-1 line-clamp-2">
                      <p>{todo.content}</p>
                    </div>
                    {taskStatus[todo.id] ? (
                      <span
                        ref={refTwo}
                        className="bg-secondary-100 dark:bg-secondary-200 flex flex-col border border-primary-100 px-2 absolute top-9 z-50 right-5 shadow-sm rounded-lg"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setDone(todo);
                          }}
                        >
                          Done
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteTodo(todo);
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    ) : null}
                  </div>
                </Link>
              )
          )}
        </div>
        <div>
          <h1 className="text-xl font-bold text-center dark:text-secondary-100">
            Done
          </h1>
          <hr />
          {todos.map(
            (todo) =>
              todo.isCompleted === "Done" && (
                <Link to={`/todo/${todo.id}`} key={todo.id}>
                  <div className="h-28 relative border hover:cursor-pointer shadow-sm rounded-lg p-4 m-2 bg-secondary-100 dark:bg-secondary-200 dark:border-secondary-200 dark:text-secondary-100">
                    <div className="flex justify-between">
                      <div className="flex flex-row">
                        <p className="rounded-xl bg-primary-200 text-secondary-100 text-xs lg:text-base px-4 mr-2 ">
                          {todo.category}
                        </p>
                        <p className="rounded-xl bg-primary-100 text-secondary-100 text-xs lg:text-base px-4 ">
                          {todo.dueDate}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpen(todo.id);
                        }}
                        ref={refStatusPopUp}
                        className="float-right"
                      >
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div className="flex flex-col my-1 line-clamp-2">
                      <p>{todo.content}</p>
                    </div>
                    {taskStatus[todo.id] ? (
                      <span
                        ref={refTwo}
                        className="bg-secondary-100 dark:bg-secondary-200 flex flex-col border border-primary-100 px-2 absolute top-9 z-50 right-5 shadow-sm rounded-lg"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteTodo(todo);
                          }}
                        >
                          Delete
                        </button>
                      </span>
                    ) : null}
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
