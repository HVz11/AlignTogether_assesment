import React, { useState } from "react";
import ColorPicker from "./colorPicker";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo({
      task,
      color,
      completed: false,
    });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Todo..."
      />
      <ColorPicker color={color} setColor={setColor} />
      <button className="Formbutton" type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
