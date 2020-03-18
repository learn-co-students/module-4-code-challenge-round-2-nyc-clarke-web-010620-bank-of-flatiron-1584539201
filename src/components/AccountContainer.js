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
        let filteredTransactionsCopy = [...this.state.filteredTransactions]
        filteredTransactionsCopy.push(body)
        this.setState({filteredTransactions: filteredTransactionsCopy, transactions: transactionsCopy, date: "",
      description: "", amount: "", category: ""})
      })
  }

  deleteTransaction = (id) => {
    fetch(`${baseURL}/${id}`,{
      method: 'DELETE'
    }).then(resp => resp.json())
      .then(body => {
       let transIndex = this.state.transactions.findIndex(transaction => transaction.id === id)
       let transCopy = [...this.state.transactions]
       console.log("foundindex", transIndex, "actual index", transCopy[transIndex])
        transCopy.splice(transIndex, 1)
        this.setState({transactions: transCopy, filteredTransactions: transCopy})
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

  sortABCDesc = (e) => {
    e.preventDefault()
    let filteredCopy3 = [...this.state.filteredTransactions]
    let sortedCopy = filteredCopy3.sort((a, b) => (a.description > b.description) ? 1 : -1)
    this.setState({filteredTransactions: sortedCopy})
  }

  sortABCCat = (e) => {
    e.preventDefault()
    let filteredCopy3 = [...this.state.filteredTransactions]
    let sortedCopy = filteredCopy3.sort((a, b) => (a.category > b.category) ? 1 : -1)
    this.setState({filteredTransactions: sortedCopy})
  }

  render() {
    const values = Object.assign({}, {date: this.state.date}, {description: this.state.description},{category: this.state.category}, {amount: this.state.amount})
    
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm} sortABCDesc={this.sortABCDesc} sortABCCat={this.sortABCCat}/>
        <AddTransactionForm handleSubmit={this.addTransaction} handleChange={this.handleChange} values={values}/>
        <TransactionsList transactions={this.state.filteredTransactions} delete={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
