import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions: []
  }
  
  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions}))
  }

  addNewToList = (transaction) => {
    this.setState({transactions: [...this.state.transactions, transaction]})
  }
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm url={URL} addNewToList={this.addNewToList}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
