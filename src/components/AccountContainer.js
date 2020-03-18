import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    filteredTransactions: [],
    search: ""
  }

  componentDidMount(){

    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions,
        filteredTransactions: transactions
      })
    })
  }

  addNewTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction],
      filteredTransactions: [...this.state.filteredTransactions, newTransaction]
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    }, () => {
      
      this.setState({
        filteredTransactions: this.state.transactions.filter(transaction => transaction.description.includes(this.state.search))
      })
      
    })
  }

  sortBy = (event) => {
    console.log(event.target.value)
    if(event.target.value === "Category"){
      this.setState({
        filteredTransactions: this.state.filteredTransactions.sort((a,b) => a.category > b.category ? 1 : -1)
      })
    } else if(event.target.value === "Description"){
      this.setState({
        filteredTransactions: this.state.filteredTransactions.sort((a,b) => a.description > b.description ? 1 : -1)
      })
    }
  }

  render() {
    console.log(this.state.search)
    return (
      <div>

        <label>Sort Alphabetically By: </label>
        <select onChange={this.sortBy}>
          <option>Category</option>
          <option>Description</option>
        </select>

        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
