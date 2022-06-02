import React from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (EnteredExpenseData) => {
        const expensesData = {
            ...EnteredExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(expensesData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;