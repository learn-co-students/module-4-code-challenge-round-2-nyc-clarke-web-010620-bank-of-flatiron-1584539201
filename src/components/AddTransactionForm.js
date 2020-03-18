import React, { Component } from "react";

// const startInputs = {
//   date: 'Date',
//     description: 'Description',
//     category: 'Category',
//     amount: 'Amount'
// }
class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  updateInput = (event) => {
    console.log(event.target.value);
    
    this.setState({
      [event.target.name]: event.target.value
    })
  } 


  submitForm = (event) => {
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.addNewTransaction(data)
    })
    this.setState ({
      date: 'Date',
      description: 'Description',
      category: 'Category',
      amount: 'Amount'
    })
  }

  render() {
    return (
      <div className="ui segment" >
        <form className="ui form" onSubmit={this.submitForm}>
          <div className="inline fields">
            <input type="date" value={this.state.date} name="date" onChange={this.updateInput}/>
            <input type="text" value={this.state.description} name="description" placeholder="Description" onChange={this.updateInput}/>
            <input type="text" value={this.state.category} name="category" placeholder="Category" onChange={this.updateInput}/>
            <input onChange={this.updateInput}
              type="number"
              name="amount"
              value={this.state.amount}
              placeholder="Amount"
              step="0.01"
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
