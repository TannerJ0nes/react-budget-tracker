import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const numericAmount = Number(amount);

    const finalAmount =
      category === "Income"
        ? Math.abs(numericAmount)
        : -Math.abs(numericAmount);

    onAdd({
      id: Date.now(),
      text,
      amount: finalAmount,
      category
    });

    setText("");
    setAmount("");
    setCategory("Income");
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
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Income">Income</option>
        <option value="Rent">Rent</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
