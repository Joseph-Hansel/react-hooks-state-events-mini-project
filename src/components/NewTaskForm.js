// import React from "react";

// function NewTaskForm({onTaskFormSubmit, categories, handleTextChange, handleCategoryChange, text, category}) {
//   return (
//     <form 
//       className="new-task-form" 
//       onSubmit={(e)=>onTaskFormSubmit(e)}
//     >
//       <label>
//         Details
//         <input type="text" name="text" value={text} onChange={(e)=>handleTextChange(e)}/>
//       </label>
//       <label>
//         Category
//         <select name="category" value={category} onChange={(e)=>handleCategoryChange(e)}>
//           {categories.map((category, index)=>{
//             return category === "All" ? "" : <option key={index} value={category}>{category}</option>
//           })}
//         </select>
//       </label>
//       <input type="submit" value="Add task"/>
//     </form>
//   );
// }

// export default NewTaskForm;



















































import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code"); // default to one of the valid categories

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((cat) => cat !== "All")
            .map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
