import "./ExpenseForm.css"

const ExpenseForm = () => {

  const userExpenseHandler = (e) => {
    e.preventDefault()
    console.log("Working!")
  }

  return (
    <form onSubmit={userExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" mim="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2000-01-01" max="2049-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm