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
    dispatch(addExpense({ name, amount }));
    setName('');
    setAmount('');
  };

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
              <td><button onClick={() => dispatch(deleteExpense(index))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Etable;
