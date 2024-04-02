import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../Redux/action";
import { toast } from "react-toastify";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Fetch tasks from localStorage upon initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      dispatch({ type: "FETCH_TASKS", payload: storedTasks });
    }
  }, [dispatch]);

  // handle delete task 
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    toast.success("Task deleted successfully!");
  };

  // handle toggle task completed or not
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
    toast.success("Task status updated successfully!");
  };

  return (
    <div className="container">
      <h2 className="heading">Task List</h2>
      <div className="todo-list">
        {tasks.map((task) => (
          <div className="todo" key={task.id}>
            <li
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span>{task.text.toUpperCase()}</span>
            </li>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
