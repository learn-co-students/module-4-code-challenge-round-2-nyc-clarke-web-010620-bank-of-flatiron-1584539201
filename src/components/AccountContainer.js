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
      transactions: [...this.state.transactions, newTransaction]
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

  render() {
    console.log(this.state.search)
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
