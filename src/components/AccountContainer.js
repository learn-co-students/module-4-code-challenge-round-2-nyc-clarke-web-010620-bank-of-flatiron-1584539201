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

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList trans={this.state.trans}/>
      </div>
    );
  }
}

export default AccountContainer;
