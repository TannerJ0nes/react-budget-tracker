import { useState } from "react";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((total, t) => total + t.amount, 0);

  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((total, t) => total + t.amount, 0);

  const balance = income + expenses;

  return (
    <div>
      <h1>Budget Tracker</h1>

      <h2>Balance: ${balance}</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${Math.abs(expenses)}</p>

      <TransactionForm onAdd={addTransaction} />
    </div>
  );
}

export default App;
