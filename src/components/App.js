import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  componentDidMount () {
    fetch('http://localhost:6001/transactions')
    .then(r=>r.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })

  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AddTransactionForm 
            date={this.state.date}
            description={this.state.description}
            category={this.state.category}
            amount={this.state.amount}
        />
        <AccountContainer transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
