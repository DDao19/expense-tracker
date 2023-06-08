import Expenses from "./components/Expenses";

const App = () => {
  const expense = [
    {
      date: new Date(2023, 6, 1),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      date: new Date(2023, 4, 16),
      title: "Groceries",
      amount: 120.54,
    },
    {
      date: new Date(2023, 2, 21),
      title: "Furniture",
      amount: 2299.99,
    },
    {
      date: new Date(2023, 2, 8),
      title: "Sony TV",
      amount: 1499.99,
    }
  ];

  return (
    <div>
      <h1>[Some Title]</h1>
      <Expenses expenseData={expense} />
    </div>
  );
};

export default App;
