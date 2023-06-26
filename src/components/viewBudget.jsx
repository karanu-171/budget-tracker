import React from 'react'

const viewBudget = (props) => {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <button
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
}

export default viewBudget
