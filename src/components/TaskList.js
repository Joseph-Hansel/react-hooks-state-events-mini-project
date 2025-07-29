import React from "react";
import Task from "./Task"

function TaskList({tasks, setTasks}) {

  function deleteTask(e){
    console.log(e.target.name)
    setTasks(tasks.filter((task)=> e.target.name !== task.text))
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return <Task key={index} category={task.category} text={task.text} deleteTask={deleteTask} index={index}/>
      })}
    </div>
  );
}

export default TaskList;
