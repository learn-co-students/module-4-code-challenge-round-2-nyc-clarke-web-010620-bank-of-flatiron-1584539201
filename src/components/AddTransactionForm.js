import React, { Component } from "react";

const API = "http://localhost:6001/transactions"

const initialState = {
  date: "",
  description: "",
  category: "",
  amount: 0
}

class AddTransactionForm extends Component {

  state = initialState

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(newTransaction => this.props.addNewTransaction(newTransaction))

    this.setState(initialState)
  }
  

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.changeHandler}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description}
            onChange={this.changeHandler}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} 
            onChange={this.changeHandler}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.changeHandler}
            />
          </div>
          <button className="ui button" type="submit" onSubmit={this.submitHandler}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
