import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/action";
import { toast } from "react-toastify";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  // Handle Input change
  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  // Handle Add Task
  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText("");
      toast.success("Task added successfully!");
    }
  };

  // handle on enter press to add todo
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      {/* Take to-do input  */}
      <div className="container todo-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="form-control w-5 mr-2"
        />
        <button onClick={handleAddTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
    </>
  );
};

export default TaskInput;
