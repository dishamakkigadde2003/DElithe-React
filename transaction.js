import React, { useState } from 'react';

function Transaction() {
  const [transaction, setTransaction] = useState({
    amount: "",
    type: "Deposit",
    description: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for processing the transaction
    alert(`${transaction.type} of $${transaction.amount} successful!`);
  };

  return (
    <div>
      <h2>Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Transaction Type:</label>
          <select
            name="type"
            value={transaction.type}
            onChange={handleChange}
          >
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={transaction.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Transaction</button>
      </form>
    </div>
  );
}

export default Transaction;
