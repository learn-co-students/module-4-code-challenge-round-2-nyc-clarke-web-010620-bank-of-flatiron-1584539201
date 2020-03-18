import React from "react";

class Search extends React.Component {

  state = {
    description:"",
  };

  handleOnChange = e => {
    this.setState({description: e.target.value})
    this.props.searchFilter(e.target.value)
  }

  render(){
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={this.state.description}
        onChange={this.handleOnChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};
}

export default Search;
