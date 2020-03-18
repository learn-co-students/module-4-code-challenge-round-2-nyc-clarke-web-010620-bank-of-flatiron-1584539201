import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  componentDidMount () {
    fetch('http://localhost:6001/transactions')
    .then(r=>r.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }
 /// save the new values entered into the form and update state with those!
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // get current state of transactions and add new transaction to the whole array 
  addTransaction = (transaction) => {
    // console.log(transaction)
    this.setState({ transactions: [...this.state.transactions, transaction]})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        // get data from handleChange where i saved data from the transaction into here to send to database

      })
    })
    .then(r=>r.json())
    .then(transaction => this.addTransaction(transaction) )
    ////// now need to set state to have all the form parts empty again
    // this.setState({
    //   date: "", )}

    }
    
    makeFilter = () => {
      
    }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AddTransactionForm 
            date={this.state.date}
            description={this.state.description}
            category={this.state.category}
            amount={this.state.amount}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
        />
        <AccountContainer transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
