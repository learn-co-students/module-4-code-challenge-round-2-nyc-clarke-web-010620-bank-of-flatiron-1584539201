import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="sort">
          <select value={this.props.sort} onChange={event => this.props.sortHandler(event)}>
            <option value="none"> None </option>
            <option value="category"> Category </option>
            <option value="description"> Description </option>
          </select>
      </div>
    )
  }
}

export default Sort;
