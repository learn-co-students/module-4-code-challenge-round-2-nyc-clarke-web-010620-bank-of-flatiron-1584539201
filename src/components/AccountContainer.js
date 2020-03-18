import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const BASEURL = 'http://localhost:6001/'
const GETURL = "transactions"

class AccountContainer extends Component {
  state = {
    transactions: []
  }

  componentDidMount = () => {
    fetch(`${BASEURL}${GETURL}`)
    .then(resp=>resp.json())
    .then(transactions => this.setState({transactions}))
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList {...this.state}/>
      </div>
    );
  }
}

export default AccountContainer;
