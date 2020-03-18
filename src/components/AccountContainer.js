import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";


const API = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(transactions => this.setState({
      transactions
    }))
  }

  renderTransactions = () => {
    return this.state.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)
  }

  addNewTransaction = newTransaction => {
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction]
      }))
  }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList renderTransactions={this.renderTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
