import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

const Todo = () => {
    const {id} = useParams()
    const [todo, setTodo] = useState({})
    const [taskStatus, setTaskStatus] = useState({});
    useEffect(() => {
        fetch(`https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${id}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [id])
    function setInProgress(e) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: "inProgress" }),
      };
      fetch(
        `https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${e}`,
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
      fetch(
        `https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${e}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log("put ddataa", data));
    }
    function deleteTodo(e) {
      fetch(`https://6322252d362b0d4e7dc97a30.mockapi.io/todos/${e}`, {
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
    <div className="m-6">
      <div className="relativ p-4 m-2">
        <div className="flex flex-col items-center md:items-start  my-1">
          <h1 className="font-bold">TODO</h1>
          <hr />
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-row ">
              <h2 className="underline">Todo Category :</h2>
              <p className="rounded-xl bg-primary-200 text-secondary-100 px-4 ml-2 ">
                {todo.category}
              </p>
            </div>
            <div className="flex flex-row ">
              <h2 className="underline">Todo Due Date :</h2>
              <p className="rounded-xl bg-primary-100 text-secondary-100 px-4 ml-2">
                {todo.dueDate}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <h2 className="underline">Todo Status:</h2>
            <p>
              {todo.isCompleted === false && "Not Completed"}
              {todo.isCompleted === "inProgress" && "In Progress"}
              {todo.isCompleted === "Done" && "Done"}
            </p>
          </div>
          <div className="gap-2 mt-2">
            <h2 className="underline">Todo Description :</h2>
            <p>{todo.content}</p>
          </div>
        </div>
        <div>
          {todo.isCompleted === false && (
            <span className="flex flex-col items-center gap-2">
              <h1 className="text-center font-bold">Mark Todo As</h1>
              <hr className="w-full" />
              <Link to="/">
                <button
                  onClick={() => setInProgress(todo.id)}
                  className="rounded-xl bg-primary-100 text-secondary-100 px-4 w-32 "
                >
                  In Progress
                </button>
              </Link>
              <Link to="/">
                <button
                  onClick={() => {
                    setDone(todo.id);
                  }}
                  className="rounded-xl bg-primary-100 text-secondary-100 px-4 w-32"
                >
                  Done
                </button>
              </Link>
              <h1 className="text-center font-bold">Delete Todo</h1>
              <hr className="w-full" />
              <Link to="/">
                <button
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                  className="rounded-xl bg-primary-100 text-secondary-100 px-4 w-32"
                >
                  Delete
                </button>
              </Link>
            </span>
          )}
          {todo.isCompleted === "inProgress" && (
            <span className="flex flex-col items-center gap-2">
              <h1 className="text-center font-bold">Mark Todo As</h1>
              <hr className="w-full" />
              <Link to="/">
                <button
                  onClick={() => {
                    setDone(todo.id);
                  }}
                  className="rounded-xl bg-primary-100 text-secondary-100 px-4 w-32"
                >
                  Done
                </button>
              </Link>
              <h1 className="text-center font-bold">Delete Todo</h1>
              <hr className="w-full" />
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
                className="rounded-xl bg-primary-100 text-secondary-100 px-4 w-32"
              >
                Delete
              </button>
            </span>
          )}
          {todo.isCompleted === "Done" && (
            <span className="flex flex-col items-center gap-2">
              <h1 className="text-center font-bold">Delete Todo</h1>
              <hr className="w-full" />
              <Link to="/">
                <button
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                  className="rounded-xl bg-primary-100 text-secondary-100 px-4 w-32"
                >
                  Delete
                </button>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo