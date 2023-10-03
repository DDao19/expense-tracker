import { useState } from "react";
import ExpenseItem from "./ExpenseItem"
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  
  const differentExpense = () => {
    return expenseData.map((data, i) => {
      return (
        <ExpenseItem key={i} date={data.date} title={data.title} amount={data.amount} />
      );
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChangeHandler={filterChangeHandler} />
        {differentExpense()}
      </Card>
    </div>
  )
}


export default Expenses