import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    trans: [],
    displayTrans: []
  }

  componentDidMount() {
    fetch(URL).then(resp=>resp.json()).then(content=>
      this.setState({trans: content, displayTrans: content})
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

  searchFilter = (str) => {
    if (str === "") {
      this.setState({displayTrans: this.state.trans})
    }
    else {
    this.setState({displayTrans: this.state.trans.filter(tran =>tran.description.toLowerCase().match(str.toLowerCase()) )}) 
    }
  }

  render() {
    return (
      <div>
        <Search searchFilter={this.searchFilter}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList trans={this.state.displayTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
