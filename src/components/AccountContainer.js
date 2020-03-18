import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    trans: []
  }

  componentDidMount() {
    fetch(URL).then(resp=>resp.json()).then(content=>
      this.setState({trans: content})
    )
  }

  addTransaction = (tranObj) => {
    fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(tranObj),
      }
    ).then(resp => resp.json()).then((content) => {
      this.setState({trans:[...this.state.trans, content]})
  });
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList trans={this.state.trans}/>
      </div>
    );
  }
}

export default AccountContainer;
