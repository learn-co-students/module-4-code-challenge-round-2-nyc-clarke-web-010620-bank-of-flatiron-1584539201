import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    form: {
      date: '',
      description: '',
      category: '',
      amount: ''
    }
  }

  resetForm = () => {
    this.setState({
      form: {
        date: '',
        description: '',
        category: '',
        amount: ''
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      form: {...this.state.form, [event.target.name]: event.target.value}
    })
  }

  handleSubmit = (event, transaction) => {
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: "POST", 
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'}, 
      body: JSON.stringify(transaction)
    }).then(resp => resp.json()).then(newTransaction => {
      this.props.addNewTransaction(newTransaction)
      this.resetForm()
    })

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input value={this.state.form.date}type="date" name="date" onChange={this.handleChange}/>
            <input value={this.state.form.description}type="text" name="description" placeholder="Description" onChange={this.handleChange}/>
            <input value={this.state.form.category}type="text" name="category" placeholder="Category" onChange={this.handleChange}/>
            <input
              value={this.state.form.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={(event) => this.handleSubmit(event, this.state.form)} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
