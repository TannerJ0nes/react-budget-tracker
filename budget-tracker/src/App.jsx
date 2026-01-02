import { useState, useEffect } from "react"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import "./App.css"

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("Income")

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !amount) return

    const numericAmount =
      category === "Income"
        ? Math.abs(Number(amount))
        : -Math.abs(Number(amount))

    const newTransaction = {
      id: crypto.randomUUID(),
      description,
      amount: numericAmount,
      category,
    }

    setTransactions([...transactions, newTransaction])
    setDescription("")
    setAmount("")
    setCategory("Income")
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  const balance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  )

  const categoryTotals = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction
    acc[category] = (acc[category] || 0) + amount
    return acc
  }, {})

  return (
    <div className="container">
      <h1>Budget Tracker</h1>

      <h2>
        Balance:{" "}
        <span className={balance >= 0 ? "positive" : "negative"}>
          ${balance.toFixed(2)}
        </span>
      </h2>

      <TransactionForm
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        onSubmit={handleSubmit}
      />

      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />

      <h2>Category Totals</h2>
      <ul>
        {Object.entries(categoryTotals).map(([cat, total]) => (
          <li key={cat}>
            {cat}: ${Math.abs(total).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
