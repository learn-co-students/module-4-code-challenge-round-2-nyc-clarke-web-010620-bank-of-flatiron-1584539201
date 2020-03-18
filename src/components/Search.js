import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleSearchChange}
      />
      
      <button className="ui button abc-button" onClick={props.sortABCDesc}><i className="circular search link icon"></i>ABC: Description </button>
      <button className="ui button abc-button" onClick={props.sortABCCat}><i className="circular search link icon"></i>ABC: Category </button>
    </div>
  );
};

export default Search;
