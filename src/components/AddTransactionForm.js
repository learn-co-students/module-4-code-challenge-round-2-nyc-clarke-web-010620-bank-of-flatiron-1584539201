import React, { Component } from "react";
const initialSate = {
  date: '',
  description: '',
  category: '',
  amount: '',
}
const BASEURL = 'http://localhost:6001/'
const POSTURL =  `transactions`
const headers = {'Content-Type': 'application/json'}

class AddTransactionForm extends Component {
  state = initialSate
  
  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(
      `${BASEURL}${POSTURL}`, {
      method: "POST",
      headers,
      body: JSON.stringify(this.state)
      })
      .then(resp=>resp.json())
      .then(transaction => {
        this.setState(this.state = initialSate)
      })
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
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
