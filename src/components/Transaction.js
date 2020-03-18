import React from "react";

const Transaction = (props) => {

  //will refactor if i have time
  // console.log(props.transaction)
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
