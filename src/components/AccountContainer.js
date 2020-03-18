import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import EditForm from './EditForm'
class AccountContainer extends Component {

  state = {
    transactions: [],
    filteredTransactions: [],
    search: "",
    edit: false,
    editForm: {
      date: '',
      description: '',
      category: '',
      amount: ''
    }
  }
 

  componentDidMount(){

    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions,
        filteredTransactions: transactions
      })
    })
  }

  addNewTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction],
      filteredTransactions: [...this.state.filteredTransactions, newTransaction]
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    }, () => {
      
      this.setState({
        filteredTransactions: this.state.transactions.filter(transaction => transaction.description.includes(this.state.search))
      })
      
    })
  }
  ///BONUS
  sortBy = (event) => {
    if(event.target.value === "Category"){
      this.setState({
        filteredTransactions: this.state.filteredTransactions.sort((a,b) => a.category > b.category ? 1 : -1)
      })
    } else if(event.target.value === "Description"){
      this.setState({
        filteredTransactions: this.state.filteredTransactions.sort((a,b) => a.description > b.description ? 1 : -1)
      })
    } else if(event.target.value === "Amount"){
      this.setState({
        filteredTransactions: this.state.filteredTransactions.sort((a,b) => a.amount > b.amount ? 1 : -1)
      })
    } else if(event.target.value === "Date"){
      this.setState({
        filteredTransactions: this.state.filteredTransactions.sort((a,b) => a.date > b.date ? 1 : -1)
      })
    }
  }
///BONUS
  deleteTransaction = (id) => {
    console.log(id)
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE", 
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'}
    })
    this.setState({
      transactions: this.state.transactions.filter(transaction => transaction.id !== id),
      filteredTransactions: this.state.filteredTransactions.filter(transaction => transaction.id !== id)
    })
  }
 ///EXTRA
  showEdit = (transaction) => {
    console.log("working")
    console.log(transaction)
    this.setState({
      edit: !this.state.edit,
      editForm: transaction
    })
    
  }

  resetForm = () => {
    this.setState({
      editForm: {
        date: '',
        description: '',
        category: '',
        amount: ''
      }
    })
  }

  handleEditChange = (event) => {
    this.setState({
      editForm: {...this.state.form, [event.target.name]: event.target.value}
    })
  }


  render() {
    return (
      <div>
        
        <label>Sort Alphabetically By: </label>
        <select onChange={this.sortBy}>
          <option>Category</option>
          <option>Description</option>
          <option>Amount</option>
          <option>Date</option>
        </select>

        {this.state.edit ? <EditForm editForm={this.state.editForm} handleEditChange={this.handleEditChange}/> : null }


        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.filteredTransactions} deleteTransaction={this.deleteTransaction} showEdit={this.showEdit}/>
      </div>
    );
  }
}

export default AccountContainer;
