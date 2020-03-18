import React from "react";

const Transaction = (props) => {

  const {id, date, description, category, amount} = props

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td className={amount < 0 ? 'red' : ""}>${amount}</td>
      <td>
        <button className="ui button" onClick={() => props.delete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
