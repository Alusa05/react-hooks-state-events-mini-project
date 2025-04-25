import React from "react";
import Task from "./Task"; // Make sure you have a Task component

function TaskList({ tasks, onDeleteTask, selectedCategory }) {
  // Filter tasks based on selected category
  const displayedTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {displayedTasks.map(task => (
        <Task 
          key={task.text} 
          task={task} 
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList; // This was missing before