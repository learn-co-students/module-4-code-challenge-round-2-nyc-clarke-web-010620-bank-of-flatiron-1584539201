import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.props.handleChange} />
            <input type="text" name="description" placeholder="Description" onChange={this.props.handleChange}/>
            <input type="text" name="category" placeholder="Category" onChange={this.props.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.props.handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
