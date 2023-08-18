import ExpenseItem from "./ExpenseItem"
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

const Expenses = ({ expenseData }) => {
  
  const differentExpense = () => {
    return expenseData.map((data, i) => {
      return (
        <ExpenseItem key={i} date={data.date} title={data.title} amount={data.amount} />
      );
    });
  };
  console.log(expenseData)
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter />
        {differentExpense()}
      </Card>
    </div>
  )
}


export default Expenses