import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const reorderTodos = (startIndex, endIndex) => {
    const updatedTodos = [...todos];
    const [removedTodo] = updatedTodos.splice(startIndex, 1);
    updatedTodos.splice(endIndex, 0, removedTodo);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        reorderTodos={reorderTodos}
      />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
