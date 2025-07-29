import React from "react";

function Task({category, text, deleteTask, index}) {
  return (
    <div className="task">
      <div className="label">{category}</div> 
      <div className="text">{text}</div>
      <button className="delete" name={text} onClick={(e)=>deleteTask(e)}>X</button>
    </div>
  );
}

export default Task;
