function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li
            key={t.id}
            className={t.amount > 0 ? "plus" : "minus"}
          >
            {t.text}
            <span>
              ${t.amount}
              <button onClick={() => onDelete(t.id)}>❌</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
