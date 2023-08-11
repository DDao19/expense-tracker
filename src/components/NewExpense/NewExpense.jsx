import ExpenseForm from './ExpenseForm'

import "./NewExpense.css"

const NewExpense = ({ onAddNewExpenseHandler }) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    }
    onAddNewExpenseHandler(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense