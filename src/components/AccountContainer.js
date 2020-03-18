import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    showTransactions: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data, showTransactions: data}))
  }

  addNewTransaction = (transaction) => {
    let trCopy = [...this.state.showTransactions]
    trCopy.push(transaction)
    this.setState({
      showTransactions: trCopy
    })
    console.log(transaction, 'done')
    
  }


  render() {
    
    
    return (
      <div>
        <Search />
        <AddTransactionForm updateInput={this.updateInput} submitForm={this.submitForm} addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.showTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
