import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const initial_expenses = [
  { id: 'e1', date: new Date(2023, 3, 2), title: 'Car Insurance', amount: 294.67 },
  { id: 'e2', date: new Date(2022, 1, 3), title: 'New TV', amount: 799.49 },
  { id: 'e3', date: new Date(2019, 4, 3), title: 'New Desk', amount: 450.00 },
  { id: 'e5', date: new Date(2019, 4, 3), title: 'TV', amount: 450.00 },
  { id: 'e6', date: new Date(2021, 4, 3), title: 'remte', amount: 450.00 },
  { id: 'e7', date: new Date(2022, 4, 3), title: 'call phone', amount: 450.00 },
];

const App = () => {

  const [expenses, setExpenses] = useState(initial_expenses);
  const [ isChanged, setIsChanged ] = useState(false);

  const addExpenseHandler = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: Math.random().toString(),
    }

    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses]
    })
    setIsChanged(true);
  }

  const dataUpdateHandler = () => {
    setIsChanged(false);
    console.log(isChanged)
    console.log('data updated')
  }

  return (
    <div>
      <NewExpense onAddingNewExpenseData={addExpenseHandler} />
      <Expenses expenses={expenses} isNewExpenseAdded={isChanged} updateData={dataUpdateHandler} />
    </div>
  )
}
export default App; 
