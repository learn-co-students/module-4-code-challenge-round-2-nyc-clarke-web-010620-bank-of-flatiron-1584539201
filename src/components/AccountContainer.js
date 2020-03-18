import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const BASE_URL = `http://localhost:6001/transactions`

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({ transactions: data })
    })
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
