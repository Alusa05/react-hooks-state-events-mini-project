import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [categories] = React.useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  function handleDeleteTask(taskText){

    setTasks(tasks.filter(task => task.text !== taskText));
  }
  function handleAddTask(newTask){
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={categories} 
      selectedCategory={selectedCategory} 
      onSelectCategory={setSelectedCategory} 
      />
      
      <TaskList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
      categories={categories.filter(cat => cat !== "All")}
      onTaskFormSubmit={handleAddTask}
       />
    </div>
  );
}

export default App;
