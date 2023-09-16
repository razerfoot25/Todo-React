import React from "react";
import { useState, useEffect } from "react";
import DeleteIcon from "../images/icon-cross.svg";
const Items = ({ lightTheme, id, todo, status, OnComplete, OnDelete }) => {
  const [Checked, setChecked] = useState(false);
  function handleOnChange() {
    setChecked(!Checked);
    OnComplete(id);
  }

  useEffect(() => {
    function SyncChecked() {
      setChecked(status);
    }
    SyncChecked();
  }, []);

  return (
    <div className={`items flex flex-row ${lightTheme && "light"}`}>
      <span
        onClick={() => handleOnChange()}
        className={`items--checkbox ${Checked && "checked"} `}
      ></span>
      <input
        type="checkbox"
        id={id}
        onChange={() => handleOnChange()}
        defaultChecked={status}
      />
      <label
        htmlFor={id}
        className={`items--title ${Checked && "todo-complete"}`}
      >
        {todo}
      </label>
      <img src={DeleteIcon} onClick={() => OnDelete(id)} />
    </div>
  );
};

export default Items;
