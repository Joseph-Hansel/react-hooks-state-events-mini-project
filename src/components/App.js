// import React, {useState} from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";

// function App() {

//   const [tasks, setTasks] = useState(TASKS)
//   const [clicked, setClicked] = useState("All")
//   const [text, setText] = useState("")
//   const [category, setCategory] = useState("")
//   const [newTask, setNewTask] = useState("")

//   function select(e){
//     setTasks(TASKS.filter((task)=> e.target.name === "All" || task.category === e.target.name))
//   }

//   function onTaskFormSubmit(e){
//     e.preventDefault();
//     setTasks([...tasks, newTask])
//   }

//   function handleTextChange(e){
//     setText(e.target.value);
//     setNewTask({
//       text: text,
//       category: category
//     })
//   }

//   function handleCategoryChange(e){
//     setCategory(e.target.value);
//     setNewTask({
//       text: text,
//       category: category
//     })
//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={CATEGORIES} select={select} clicked={clicked} setClicked={setClicked}/>
//       <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} handleTextChange={handleTextChange} text={text} handleCategoryChange={handleCategoryChange} category={category}/>
//       <TaskList tasks={tasks} setTasks={setTasks}/>
//     </div>
//   );
// }

// export default App;






































import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleCategoryFilterClick(e) {
    const category = e.target.name;
    setSelectedCategory(category);

    if (category === "All") {
      setTasks(TASKS);
    } else {
      setTasks(TASKS.filter((task) => task.category === category));
    }
  }

  function handleTaskFormSubmit(newTask) {
    // e.preventDefault();

    // const newTask = {
    //   text,
    //   category,
    // };

    setTasks([...tasks, newTask]);
    // setText("");
    // setCategory("");
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        select={handleCategoryFilterClick}
        clicked={selectedCategory}
        setClicked={setSelectedCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={handleTaskFormSubmit}
        categories={CATEGORIES}
      />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
