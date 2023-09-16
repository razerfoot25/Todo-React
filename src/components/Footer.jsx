import React from "react";

const Footer = ({ lightTheme, Items, onChangeFilter, onClearTodo }) => {
  function handleOnChange(id) {
    onChangeFilter(id);
  }
  return (
    <div>
      <div
        className={`footer--mobile flex flex-row mobile-only ${
          lightTheme && "light"
        } `}
      >
        <small className="small">{`${Items} Items left`}</small>
        <button className="btn" onClick={() => onClearTodo()}>
          Clear Completed
        </button>
      </div>
      <div className={`footer flex flex-row ${lightTheme && "light"}`}>
        <small className="desktop-only small">{`${Items} Items left`}</small>
        <ul role="list" className="footer--list flex flex-row">
          <li>
            <input
              type="radio"
              name="footer"
              onChange={() => handleOnChange(1)}
              id="all"
              className="footer--checkbox"
              defaultChecked={true}
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              type="radio"
              name="footer"
              onChange={() => handleOnChange(2)}
              id="active"
              className="footer--checkbox"
            />
            <label htmlFor="active">Active</label>
          </li>
          <li>
            <input
              type="radio"
              name="footer"
              onChange={() => handleOnChange(3)}
              id="completed"
              className="footer--checkbox"
            />
            <label htmlFor="completed">Completed</label>
          </li>
        </ul>
        <button className="desktop-only btn" onClick={() => onClearTodo()}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
