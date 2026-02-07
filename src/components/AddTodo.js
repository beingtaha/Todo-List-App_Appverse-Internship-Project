import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="add-todo">
      <h3>Add New Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo text..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
