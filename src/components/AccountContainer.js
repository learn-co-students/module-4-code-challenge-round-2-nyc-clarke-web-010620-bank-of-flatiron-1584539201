import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchText: ''
  }
  
  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions}))
  }

  addNewToList = (transaction) => {
    this.setState({transactions: [...this.state.transactions, transaction]})
  }

  handleSearchText = e => {
    this.setState({searchText: e.target.value})
  }

  processSearch = () => {
    this.setState({transactions: [...this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchText))]})
  }
  
  render() {
    return (
      <div>
        <Search handleSearchText={this.handleSearchText} processSearch={this.processSearch}/>
        <AddTransactionForm url={URL} addNewToList={this.addNewToList}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
