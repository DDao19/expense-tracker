import { useState } from 'react';

import ExpenseDate from './ExpenseDate'
import Card from './Card'
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {

  const [updatedTitle, setUpdatedTitle] = useState(title)
  
  const changeTitleHandler = () => {
    setUpdatedTitle("Something")
    console.log(updatedTitle)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate 
        date={date}
      />
      <div className="expense-item__description">
        <h2>{updatedTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={changeTitleHandler}>Change</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
