import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    showTransactions: [],
    searchBar: '',
    searchedtransaction: {}
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data, showTransactions: data}))
  }

  addNewTransaction = (transaction) => {
    let trCopy = [...this.state.transactions]
    trCopy.push(transaction)
    this.setState({
      transactions: trCopy,
      showTransactions: trCopy
    })
    
  }

  searchTransaction = (event) => {
    this.setState({
      searchBar: event.target.value,
      searchedtransaction: this.state.transactions.filter(t=> t.description.includes(this.state.searchBar))

    })    
  }

  renderSearch = () => {
    this.setState({
      showTransactions: this.state.searchedtransaction
    })
  }

 
  
  
  render() {
    
    
    return (
      <div>
        <Search searchTransaction={this.searchTransaction} renderSearch={this.renderSearch}/>
        <AddTransactionForm updateInput={this.updateInput} submitForm={this.submitForm} addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.showTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
