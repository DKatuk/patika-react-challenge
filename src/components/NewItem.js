import React from 'react'
// import { AiOutlinePlusCircle } from "react-icons/ai";

const NewItem = ({ setNewTask, submitTask, setNewCategory, setNewDueDate }) => {
  return (
    <div className="mx-6">
      <hr />
      <form className="grid md:grid-cols-3 gap-2 pt-4">
        <span>
          <label htmlFor="task" className="text-secondary-300 mb-2 mr-4">
            <b>Task:</b>
          </label>
          <input
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter Task"
            className="rounded-lg w-44 h-10"
            name="task"
          />
        </span>
        <span>
          <label htmlFor="task" className="text-secondary-300 mb-2 mr-4">
            <b>Category:</b>
          </label>
          <select
            name="languages"
            onChange={(e) => setNewCategory(e.target.value)}
            id="task"
            className="rounded-lg w-44 h-10"
            defaultValue="Work"
          >
            <option
              value="Work"
            >
              Work
            </option>
            <option value="Study">Study </option>
            <option
              value="Shopping"
            >
              Shopping
            </option>
            <option
              value="Friends"
            >
              Friends{" "}
            </option>
            <option
              value="Meeting"
            >
              Meeting{" "}
            </option>
          </select>
        </span>
        <span>
          <label htmlFor="date" className="text-secondary-300 mb-2 mr-4">
            <b>Due Date:</b>
          </label>
          <input
            type="date"
            onChange={(e) => setNewDueDate(e.target.value)}
            placeholder="Select Category"
            className="rounded-lg w-44 h-10"
            name="date"
          />
        </span>
        <span className="flex justify-end md:col-start-2 md:justify-center">
          <button
            onClick={submitTask}
            className="flex  mt-4 px-4 rounded-lg border border-primary-100 bg-secondary-100 hover:bg-primary-100 text-primary-100 hover:text-secondary-100"
          >
            Add Task
          </button>
        </span>
      </form>
    </div>
  );
};

export default NewItem