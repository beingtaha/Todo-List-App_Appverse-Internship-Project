import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-list">
      <h2>My Todo List</h2>
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one!</p>
      ) : (
        <div className="todos-container">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
