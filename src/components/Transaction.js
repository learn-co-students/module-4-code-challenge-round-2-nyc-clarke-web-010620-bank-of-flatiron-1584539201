import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <button onClick={() => props.delete(props.transaction.id)}>Delete</button>
      <button onClick={() => props.edit(props.transaction)}>Edit</button>

    </tr>
  );
};

export default Transaction;
