import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((total, t) => total + t.amount, 0);

  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((total, t) => total + t.amount, 0);

  const balance = income + expenses;

  return (
    <div className="app">
      <h1>Budget Tracker</h1>

      <div className="balance">
        <h2>Balance</h2>
        <h3>${balance}</h3>
      </div>

      <div className="summary">
        <div className="income">
          <h4>Income</h4>
          <p>${income}</p>
        </div>
        <div className="expense">
          <h4>Expenses</h4>
          <p>${Math.abs(expenses)}</p>
        </div>
      </div>

      <TransactionForm onAdd={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default App;
