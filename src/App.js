import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Components", completed: true },
    { id: 2, text: "Build Todo List App", completed: false },
    { id: 3, text: "Style with CSS", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>React Todo List App</h1>
        <p>Component Architecture Example</p>
      </header>

      <main className="app-main">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </main>

      <footer className="app-footer">
        <p>Built with React Component Architecture</p>
      </footer>
    </div>
  );
}

export default App;
