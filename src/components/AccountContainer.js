import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseURL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    filteredTransactions: [],
    date: "",
    description: "",
    category: "",
    amount: "",
    searchTerm: ""
  }


  componentDidMount(){
    fetch(baseURL)
      .then(resp => resp.json())
        .then(body => this.setState({transactions: body, filteredTransactions: body}))
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
        let filteredTransactionsCopy = [...this.state.filteredTransactions]
        filteredTransactionsCopy.push(body)
        this.setState({filteredTransactions: filteredTransactionsCopy})
      })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value},
      () => {
        if (this.state.searchTerm === ""){
          this.setState({filteredTransactions: this.state.transactions})
        } else {
        let filteredTransactionsCopy2 = [...this.state.filteredTransactions]
        let newFiltered = filteredTransactionsCopy2.filter(transaction => transaction.description.includes(this.state.searchTerm))
        this.setState({filteredTransactions: newFiltered})
        }
      })
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm handleSubmit={this.addTransaction} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
