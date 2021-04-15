import React, { useState } from "react";
import ListItem from "./Components/ListItem";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const newTask = (evt) => {
    setNewItem(evt.target.value);
  };
  const saveItem = () => {
    if (newItem.length > 0) {
      items.push(newItem);
      setItems([...items]);
      setNewItem("");
    }
  };
  const removeItem = (idx) => {
    items.splice(idx, 1);
    setItems([...items]);
  };
  const updateItem = (idx, value) => {
    items[idx] = value;
    setItems([...items]);
  };
  return (
    <div id="main">
      
      <div className='textarea'>
            <h1>To-do List</h1>
            <textarea
              id="task"
              type="text"
              placeholder="New Item"
              value={newItem}
              onChange={newTask}
            ></textarea>
            <button id="btn" onClick={saveItem}>
              Add Task
            </button>
      </div>
    

      <div className='container-list'>
          <div className='todo-items'>
              <div className='title'>todo</div>
              {items.map((item, idx) => (
                <ListItem
                  item={item}
                  key={idx}
                  index={idx}
                  removeItem={removeItem}
                  updateItem={updateItem}
                />
              ))}
          </div>

          <div className='inprogress-items'>
            <div className='title'>inprogress</div>
                  
          </div>

          <div className='done-items'>
            <div className='title'>done</div>
          
          </div>
      </div>
    </div>
  );
}

export default App;
