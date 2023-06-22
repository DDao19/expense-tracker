import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {

  const [inputTitle, setInputTitle] = useState("")
  const [inputAmount, setInputAmount] = useState()
  const [inputDate, setInputDate] = useState()

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value)
  }

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value)
  }
  
  const handleDateChange = (e) => {
    setInputDate(e.target.value)
  }

  const userExpenseHandler = (e) => {
    e.preventDefault()
    console.log("Working!")
  }

  return (
    <form onSubmit={userExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" mim="0.01" step="0.01" onChange={handleAmountChange} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2000-01-01" max="2049-12-31" onChange={handleDateChange} />
          <label>{inputDate}</label>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm