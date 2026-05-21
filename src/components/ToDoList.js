import React, { useState } from "react";
import TaskItem from "./TaskItem";

function ToDoList() {
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (
      task.trim() === "" ||
      (
        Number(hours) === 0 &&
        Number(minutes) === 0 &&
        Number(seconds) === 0
      )
    ) {
      alert("Enter a valid task and time");
      return;
    }

    const totalSeconds =
      Number(hours) * 3600 +
      Number(minutes) * 60 +
      Number(seconds);

    const newTask = {
      text: task,
      totalSeconds,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setHours("");
    setMinutes("");
    setSeconds("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function completeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <h2>My To Do List</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />

        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <TaskItem
            key={index}
            task={item}
            deleteTask={() => deleteTask(index)}
            completeTask={() => completeTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;