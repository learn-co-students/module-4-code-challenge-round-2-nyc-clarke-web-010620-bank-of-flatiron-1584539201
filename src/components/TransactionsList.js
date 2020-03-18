import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  state ={
    sort: ''
  }

  handleSort = e => {
    this.setState({sort: e.target.value})
  }

  runSort = (sortTerm) => {
    if(sortTerm){
      const sortedArray = [...this.props.transactions].sort(function(a,b){return a.sortTerm - b.sortTerm})
      return sortedArray.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
    } else {
      return this.props.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
    }
  }

  render(){
    return (
      <div>
        Sort by: <select onChange={this.handleSort}>
          <option>Category</option>
          <option>Description</option>
        </select>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>
                <h3 className="ui center aligned header">Date</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Description</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Category</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Amount</h3>
              </th>
            </tr>
            {this.runSort(this.state.sort)}
          </tbody>
        </table>
      </div>
    );
  };
};

export default TransactionsList;
