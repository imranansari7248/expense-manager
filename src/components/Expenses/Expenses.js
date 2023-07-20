import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import './Expenses.css'
import FilterExpenseYear from "./FilterExpenseYear";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('All');

    const filterYear = (newYear) => {
        setSelectedYear(newYear);
    }

    const filteredYears = props.expenses.filter((expense) => {
        if (selectedYear == 'All') {
            return true;
        }
        return expense.date.getFullYear().toString() == selectedYear;
    });

    return (
        <div className="expenses">
            <FilterExpenseYear onChangeSelectedYear={filterYear} />
            <ExpenseChart expenses={filteredYears} />
            <ExpenseList items={filteredYears} />
        </div>
    );
}
export default Expenses;