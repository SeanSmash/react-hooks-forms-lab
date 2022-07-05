import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  let newItem = {}

  function handleNewItemName(event){
    setItemName(event.target.value)
  }

  function handleItemCategory(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    return (
    newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    },
    onItemFormSubmit(newItem)
    )
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
