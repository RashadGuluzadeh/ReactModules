import React, { useState } from "react";
import "./SearchBox.css";
import Employees from "../Employees/Employees";

const SearchBar = ({ setState,state }) => {
  const handleInputVal = (e) => {
    setState(e.target.value);
  };
  return (
    <div>
      <header>
        <form className="search">
          <input
            className="search__input"
            value={state}
            type="text"
            id="search"
            placeholder="Search..."
            onChange={handleInputVal}
          />
        </form>
      </header>
    </div>
  );
};
export default SearchBar;
