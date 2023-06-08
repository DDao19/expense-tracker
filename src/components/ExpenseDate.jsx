import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const expenseMonth = date.toLocaleString("en-US", { month: "long" });
  const expenseYear = date.toLocaleString("en-US", { year: "numeric" });
  const expenseDay = date.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;




