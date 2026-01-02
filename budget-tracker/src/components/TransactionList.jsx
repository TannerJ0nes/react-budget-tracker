function TransactionList({ transactions, onDelete }) {
  return (
    <>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount >= 0 ? "positive" : "negative"}>
            <span>
              {t.description} — ${Math.abs(t.amount).toFixed(2)} ({t.category})
            </span>
            <button onClick={() => onDelete(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionList
