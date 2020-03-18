import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleSearchChange}
      />
      
      <button className="ui button abc-button" onClick={props.sortABC}><i className="circular search link icon"></i>ABC </button>
    </div>
  );
};

export default Search;
