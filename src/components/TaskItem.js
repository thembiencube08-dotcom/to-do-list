import React, { useEffect, useState } from "react";

function TaskItem({ task, deleteTask, completeTask }) {
  const [timeLeft, setTimeLeft] = useState(task.totalSeconds);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (task.completed) return;

    if (timeLeft <= 0) {
      setFailed(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, task.completed]);

  


  return (
    <li
      className={`task-item {
        task.completed
          ? "completed"
          : failed
          ? "failed"
          : ""
      }`}
    >
      <div>
        <strong>{task.text}</strong>

        <p>
          {task.completed
            ? "✅ Task Completed"
            : failed
            ? "❌ Task Failed"
            : `⏳ {formatTime(timeLeft)}`}
        </p>
      </div>

      <div className="buttons">
        {!task.completed && !failed && (
          <button onClick={completeTask}>
            Complete
          </button>
        )}

        <button onClick={deleteTask}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;