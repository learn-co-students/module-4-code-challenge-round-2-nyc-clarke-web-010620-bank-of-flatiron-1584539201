import React from "react";

const Search = () => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={this.props.searchHandler}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
