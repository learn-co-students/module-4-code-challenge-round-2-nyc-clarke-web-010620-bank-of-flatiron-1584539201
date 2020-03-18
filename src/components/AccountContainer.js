import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const BASEURL = 'http://localhost:6001/'
const GETURL = "transactions"
const POSTURL = `transactions`

class AccountContainer extends Component {
  state = {
    transactions: [],
    filteredSearch: [],
    searchTerm: ''
  }

  componentDidMount = () => {
    fetch(`${BASEURL}${GETURL}`)
    .then(resp=>resp.json())
    .then(transactions => this.setState({transactions}))
  }
  
  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
    this.setState({filteredSearch: this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchTerm))})
  }


  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm />
        <TransactionsList {...this.state}/>
      </div>
    );
  }
}

export default AccountContainer;
