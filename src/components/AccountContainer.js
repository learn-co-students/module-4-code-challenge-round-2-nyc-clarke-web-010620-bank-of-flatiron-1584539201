import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const BASEURL = 'http://localhost:6001/'
const GETURL = "transactions"
const POSTURL = `transactions`
const headers = {'Content-Type': 'application/json'}
const initialForm = {
  date: '',
  description: '',
  category: '',
  amount: '',
}

class AccountContainer extends Component {
  state = {
    transactions: [],
    filteredSearch: [],
    searchTerm: '',
    form: initialForm
  }

  componentDidMount = () => {
    fetch(`${BASEURL}${GETURL}`)
    .then(resp=>resp.json())
    .then(transactions => this.setState({transactions}))
  }
  
  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value}), this.addSearchTerms()
  }
  
  addSearchTerms = () => {
    this.setState({filteredSearch: this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchTerm))})
  }
  
  
  handleAddChange = (e) =>{
    e.persist()
    this.setState(prevState =>({form: {...prevState.form, [e.target.name]: e.target.value}}))
  }

  handleAddSubmit = (e) => {
    e.preventDefault()
    fetch(
      `${BASEURL}${POSTURL}`, {
      method: "POST",
      headers,
      body: JSON.stringify(this.state.form)
      })
      .then(resp=>resp.json())
      .then(transaction => {
        this.setState({form: initialForm})
        this.setState({transactions: [...this.state.transactions, transaction]})
      })
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleAddChange={this.handleAddChange} handleAddSubmit={this.handleAddSubmit} {...this.state.form}/>
        <TransactionsList {...this.state}/>
      </div>
    );
  }
}

export default AccountContainer;
