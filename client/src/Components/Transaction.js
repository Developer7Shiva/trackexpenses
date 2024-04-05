import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

// export const Transaction = (props) => { //Destructured format is given below
export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount<0? '-' : '+';

  return (
    <li key={transaction.id}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={()=> deleteTransaction(transaction._id)}>x</button>
    </li>
  );
};
