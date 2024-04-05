import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  // console.log(context.transaction); Instead of using .operator We can use Destructuring
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul>
        {Array.isArray(transactions) &&
          transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
      </ul>
    </>
  );
};
