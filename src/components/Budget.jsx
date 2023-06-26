import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext)

  const handleEdit = () => {
    dispatch({
      type: 'EDIT_BUDGET',
      payload: budget
    })
  }
  return (
    <div className='alert alert-secondary'>
      <span> Budget: ${budget}</span>
      <button className='button button-primary mr-3' onClick={handleEdit}>
        edit
      </button>
    </div>
  )
}

export default Budget
