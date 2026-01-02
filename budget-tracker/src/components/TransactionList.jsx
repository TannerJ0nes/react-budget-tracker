function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} — ${t.amount}
            <button onClick={() => onDelete(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
