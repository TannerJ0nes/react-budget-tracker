import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    onAdd({
      id: Date.now(),
      text,
      amount: Number(amount)
    });

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>

      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (income +, expense -)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
