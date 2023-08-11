import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 6, 1)
    },
    {
      id: "e2",
      title: "Groceries",
      amount: 120.54,
      date: new Date(2023, 4, 16)
    },
    {
      id: "e3",
      title: "Furniture",
      amount: 2299.99,
      date: new Date(2023, 2, 21)
    },
    {
      id: "e4",
      title: "Sony TV",
      amount: 1499.99,
      date: new Date(2023, 2, 8)
    }
  ];

  const addNewExpenseData = (newExpenseData) => {
    expense.push(newExpenseData)
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddNewExpenseHandler={addNewExpenseData} />
      <Expenses expenseData={expense} />
    </div>
  );
};

export default App;
