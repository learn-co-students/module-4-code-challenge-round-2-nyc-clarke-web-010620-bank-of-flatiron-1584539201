import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.props.date} />
            <input type="text" name="description" placeholder="Description" value={this.props.description} />
            <input type="text" name="category" placeholder="Category" value={this.props.category} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.amount}
            />
          </div>
          <button className="ui button" type="submit" onClick={this.props.handleSubmit} >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
