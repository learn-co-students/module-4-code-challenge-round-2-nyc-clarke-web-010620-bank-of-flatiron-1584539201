import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  const renderTransaction = () => {
    if (props.filteredSearch.length > 0){
      return props.filteredSearch.map(transaction => <Transaction key={transaction.id} {...transaction}/>)
    } else {
     return props.transactions.map(transaction => <Transaction key={transaction.id} {...transaction}/>)
    }
  }
  return (
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
        {renderTransaction()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
