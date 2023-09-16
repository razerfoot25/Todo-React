import React from "react";
import Items from "./Items";
import { useState } from "react";
const Todo = ({ lightTheme, todos, OnCreate, OnComplete, OnDelete }) => {
  const [Title, setTitle] = useState("");
  const [Status, setStatus] = useState(false);
  function OnCreateNew(e) {
    e.preventDefault();
    OnCreate(Title, Status);
    setTitle("");
    setStatus(false);
  }
  return (
    <div className={`todo flex no-gap  ${lightTheme && "light"}`}>
      <form
        className={`items--new flex flex-row ${lightTheme && "light"}`}
        onSubmit={(e) => OnCreateNew(e)}
      >
        <span
          className={`items--checkbox ${Status && "checked"}`}
          onClick={() => setStatus(!Status)}
        ></span>
        <input
          type="checkbox"
          className="items--new--checkbox"
          onChange={() => setStatus(!Status)}
        />
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => setTitle(e.target.value)}
          className="items--new--text"
          value={Title}
        />
      </form>
      <div className={`todo-border ${lightTheme && "light"}`}>
        {!todos.length && (
          <div className={`items flex flex-row ${lightTheme && "light"}`}>
            <p className="no-todo">No Todo</p>
          </div>
        )}
        {todos.map((todo) => (
          <Items
            key={todo.id}
            id={todo.id}
            lightTheme={lightTheme}
            todo={todo.title}
            status={todo.completed}
            OnComplete={OnComplete}
            OnDelete={OnDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
