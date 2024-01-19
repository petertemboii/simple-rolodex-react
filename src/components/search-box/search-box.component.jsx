import React from "react";
import "./search-box.styles.css";

function SearchBox(props) {
  return (
    <div>
      <input
        className={props.className}
        type="search"
        placeholder={props.placeholder}
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;
