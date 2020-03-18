import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const BASE_URL = `http://localhost:6001/transactions`

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({ transactions: data })
    })
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value  })
  }

  render() {
    const filteredTransactions = this.state.transactions.filter(transaction =>
      transaction.description.includes(this.state.searchTerm)
      ) 
    return (
      <div>
        <Search onSearchChange={this.onSearchChange} />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
