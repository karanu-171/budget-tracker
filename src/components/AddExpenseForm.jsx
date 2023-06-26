import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault()
    
    const expenses = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenses,
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={e=> setCost(e.target.value)}
          />
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">
            save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm
