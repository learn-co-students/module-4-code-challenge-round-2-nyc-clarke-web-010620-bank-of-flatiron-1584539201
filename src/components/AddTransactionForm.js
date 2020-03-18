import React, { Component } from "react";


class AddTransactionForm extends Component {
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleAddSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.props.handleAddChange} value={this.props.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.props.handleAddChange} value={this.props.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.props.handleAddChange} value={this.props.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.amount}
              onChange={this.props.handleAddChange}
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
