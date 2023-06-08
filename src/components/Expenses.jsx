import ExpenseItem from "./ExpenseItem"
import Card from "./Card";
import "./Expenses.css"

const Expenses = ({ expenseData }) => {
  
  const differentExpense = () => {
    return expenseData.map((data, i) => {
      return (
        <ExpenseItem key={i} date={data.date} title={data.title} amount={data.amount} />
      );
    });
  };
  
  return (
    <Card className="expenses">
      {differentExpense()}
    </Card>
  )
}


export default Expenses