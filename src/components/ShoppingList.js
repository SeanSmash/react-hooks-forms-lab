import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    const search = event.target.value
    setSearch(search)
  }

  function handleNewItemSubmit(newItem){
    onNewItem(newItem)
  }

  const itemsToDisplay = items.filter((item) => {
    if (search.length > 0){
      return (item.name.includes(search))
    } else if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
   });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItemSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
