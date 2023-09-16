import React from "react";
import SunIcon from "../images/icon-sun.svg";
import MoonIcon from "../images/icon-moon.svg";
const Header = ({ lightTheme, themeChange }) => {
  return (
    <header className="header flex flex-row">
      <div className="h1 bold header--title">Todo</div>
      <img
        className="header--themeicon"
        src={lightTheme ? MoonIcon : SunIcon}
        onClick={themeChange}
      />
    </header>
  );
};

export default Header;
