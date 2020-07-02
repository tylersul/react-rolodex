import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange}) => (
    <input 
    className="search"
    type="search" 
    placeholder={placeholder} 
    // Synthetic event to detect when an action occurs on the DOM
    // Camel Case indicates this is a React method, not pure HTML
    onChange={handleChange}
  />
);