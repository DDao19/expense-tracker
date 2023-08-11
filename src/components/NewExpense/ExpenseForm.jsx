import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = ({ onSaveExpenseData }) => {

  const [inputTitle, setInputTitle] = useState("")
  const [inputAmount, setInputAmount] = useState("")
  const [inputDate, setInputDate] = useState("")

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value)
  }

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value)
  }
  
  const handleDateChange = (e) => {
    setInputDate(e.target.value)
  }

  const userSubmitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    }
    onSaveExpenseData(expenseData)
    setInputTitle('')
    setInputAmount('')
    setInputDate('')
  }

  return (
    <form onSubmit={userSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={handleTitleChange} required />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" mim="0.01" step="0.01" value={inputAmount} onChange={handleAmountChange} required />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2000-01-01" max="2049-12-31" value={inputDate} onChange={handleDateChange} required />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm