import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseURL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: ""
  }


  componentDidMount(){
    fetch(baseURL)
      .then(resp => resp.json())
        .then(body => this.setState({transactions: body}))
  }

  addTransaction = (e) => {
    e.preventDefault()

    let data = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: parseInt(this.state.amount)
    }

    fetch(baseURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .then(body => {
        let transactionsCopy = [...this.state.transactions]
        transactionsCopy.push(body)
        this.setState({transactions: transactionsCopy})
      })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.addTransaction} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
