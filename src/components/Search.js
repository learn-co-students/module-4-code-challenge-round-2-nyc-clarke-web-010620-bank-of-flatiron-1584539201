import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => props.handleSearchText(e)}
      />
      <i className="circular search link icon" onClick={props.processSearch}></i>
    </div>
  );
};

export default Search;
