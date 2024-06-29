import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense } from '../Reducer/expenseSlice';
function Etable() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.list);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (name && amount) {
      dispatch(addExpense({ name, amount: parseFloat(amount) }));
      setName('');
      setAmount('');
    }
  };

  const handleDeleteExpense = (index) => {
    dispatch(deleteExpense(index));
  };

  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className='container'>
      <form id="expense-form" onSubmit={handleAddExpense}>
        <input
          type="text"
          id="expense-name"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          id="expense-amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>
                <button onClick={() => handleDeleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
          {expenses.length > 0 && (
            <tr className="total-row">
              <td colSpan="3" style={{ textAlign: 'center', fontWeight: 'bold' }}>Total Amount: {Math.round(totalAmount)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Etable;
