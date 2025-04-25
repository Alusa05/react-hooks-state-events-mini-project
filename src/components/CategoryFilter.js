import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render All button first */}
      <button
        key="All"
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>
      
      {/* Render category buttons */}
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;