import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export const Balance = () => {
  const {transactions} = useContext (GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item)=>acc+=item,0).toFixed(2);
  return (
    <>
      <h3>Your Balance</h3>
      <h4>${total}</h4>
    </>
  );
};
