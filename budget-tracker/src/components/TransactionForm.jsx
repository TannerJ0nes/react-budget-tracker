function TransactionForm({
  description,
  setDescription,
  amount,
  setAmount,
  category,
  setCategory,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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

      <button type="submit">Add Transaction</button>
    </form>
  )
}

export default TransactionForm
