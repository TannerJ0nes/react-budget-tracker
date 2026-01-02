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
    <div>
      <h1>Budget Tracker</h1>

      <h2>Balance: ${balance}</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${Math.abs(expenses)}</p>

      <TransactionForm onAdd={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default App;
