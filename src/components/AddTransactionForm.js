import React, { Component } from "react";
const BASE_URL = `http://localhost:6001/transactions`

class AddTransactionForm extends Component {
  
  getInitialState = () => ({
    date: '', description: '', category: '', amount: ''
  })

  state = this.getInitialState()

  handleDateChange = (e) => {
    this.setState({
      ...this.state, date: e.target.value
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      ...this.state, description: e.target.value
    })
  }

  handleCategoryChange = (e) => {
    this.setState({
      ...this.state, category: e.target.value
    })
  }

  handleAmountChange = (e) => {
    this.setState({
      ...this.state, amount: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { date, description, category, amount } = this.state
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount
      })
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))
    .then(transaction => this.props.addTransaction(transaction))
    .then(this.setState(this.getInitialState()))
    console.log(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" 
              onSubmit={(e) => this.handleSubmit(e)}>
          <div className="inline fields">
            <input type="date" 
            name="date" 
            onChange={(e) => this.handleDateChange(e)} />
            <input type="text" 
            name="description" 
            placeholder="Description" 
            onChange={(e) => this.handleDescriptionChange(e)} />
            <input type="text" 
            name="category" 
            placeholder="Category" 
            onChange={(e) => this.handleCategoryChange(e)} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(e) => this.handleAmountChange(e)}
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
