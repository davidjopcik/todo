import React, { useState } from "react";

export default function Todo() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  
  function createtodo() {
    const newTodoArray = [...todos];
    newTodoArray.push({
      name: item,
      isDone: false,
    });
    setTodos(newTodoArray);
    console.log(newTodoArray);
  }

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1 className="mb-5">Todo List</h1>
        <h5>Add todo</h5>
        <input
          type="text"
          placeholder="Add new todo"
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          className=" d-flex btn btn-primary mt-2"
          onClick={createtodo}
        >
          Submit
        </button>

<div>
{todos.map((x) => (
          <div>{x.name}</div>
        ))}
        </div>
      </div>
    </div>
  );
}
