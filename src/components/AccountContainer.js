import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";
import Sort from "./Sort"


const API = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
    sort: "none"
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(transactions => this.setState({
      transactions
    }))
  }

  renderTransactions = () => {
    let filteredList = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))

    if(this.state.sort === "category") {
      filteredList.sort((transA, transB) => transA.category.localeCompare(transB.category))
      console.log(filteredList)
    } else if (this.state.sort === "description") {
      filteredList.sort((transA, transB) => transA.description.localeCompare(transB.description))
      console.log(filteredList)

    }

    return filteredList.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)
  }

  addNewTransaction = newTransaction => {
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction]
      }))
  }

  searchHandler = event => {
    this.setState({
      search: event.target.value
    })
  }

  sortHandler = event => {
    this.setState({
      sort: event.target.value
    })
  }


  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        Sort Alphabetically By: <Sort sortHandler={this.sortHandler} sort={this.state.sort}/>
        <TransactionsList renderTransactions={this.renderTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
