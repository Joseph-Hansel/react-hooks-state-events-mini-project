import React from "react";

function CategoryFilter({categories, select, clicked, setClicked}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index)=>{
        return <button 
          key={index} 
          name={category}
          className={clicked === category? "selected" : ""}
          onClick={(e)=>{
            setClicked(e.target.name)
            select(e)
          }}
        >{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
