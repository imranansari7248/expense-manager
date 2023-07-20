import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = React.useState('');
    // const [enteredAmount, setEnteredAmount] = React.useState('');
    // const [enteredDate, setEnteredDate] = React.useState('');
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const [showFullForm, setShowFullForm] = useState(false);

    const titleChangeHandler = (event) => {
        setUserInput((PrevState) => {
            return {
                ...PrevState,
                title: event.target.value,
            }
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((PrevState) => {
            return {
                ...PrevState,
                amount: event.target.value,
            }
        })
    };

    const dateChangeHandler = (event) => {
        setUserInput((PrevState) => {
            return {
                ...PrevState,
                date: event.target.value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!showFullForm){
            setShowFullForm(true);
            return;
        }
        props.onSaveData({
            ...userInput,
            date: new Date(userInput.date),
        });
        setShowFullForm(false)
        alert(`${userInput.title} added successfully.`)
        setUserInput({
            title: '',
            amount: '',
            date: '',
        })
    }

    if (!showFullForm){
        return (
            <div className="new-expense__actions">
                <button onClick={() => setShowFullForm(true)}>Add New Expense</button>
            </div>
        )
    }

    return (
        <form className="new-expense__controls" onSubmit={submitHandler}>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.title} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step='0.01' value={userInput.amount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2023-12-01' value={userInput.date} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button onClick={submitHandler}>Add</button>
                <button onClick={() => setShowFullForm(false)}>Cancel</button>
            </div>
        </form>

    )
}

export default ExpenseForm;