import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpen } from "./Components/IncomeExpen";
import { TransactionList } from "./Components/TransactionList";
import { AddTransaction } from "./Components/AddTransaction";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpen/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
