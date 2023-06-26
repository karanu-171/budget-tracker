import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext)

  return (
    <ul className="list-group">
        <input 
        type="text"
        className="form-control" 
        placeholder="Type to search" />
      <div className='mt-4'>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </div>
    </ul>
  );
}

export default ExpenseList
