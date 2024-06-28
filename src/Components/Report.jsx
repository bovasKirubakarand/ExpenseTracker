import React from 'react';
import { useSelector } from 'react-redux';

function Report({ goBack }) {
    const expenses = useSelector((state) => state.expenses.list);
    return (
        <div className="report-container">
            <h1>Expense Report</h1>
            <table>
                <thead>
                    <tr>
                        <th>Expense Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}
export default Report;
