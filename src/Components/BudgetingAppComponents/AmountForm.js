import React from 'react'
import { useContext } from 'react';
import { BudgetingAppContext } from '../../Store/BudgetAppContext';
import { useRef } from 'react';


function AmountForm() {

  const {setAmount, amount} = useContext(BudgetingAppContext);
  const amountRef = useRef();


  const handleChange = (e) => {
    setAmount(parseFloat (e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount(parseFloat(amountRef.current.value));
    amountRef.current.value = '';
  }


  // console.log(amount);

  return (
    <div className='amount-form-container'>
      <form className='amount-form-div' onSubmit={handleSubmit}>
        <div className='amount-form-add-button'>
          <button type='submit'>Add Amount</button>
        </div>
        <div className='amount-text-area-div'>
          <textarea className='amount-text-area' ref={amountRef} onChange={handleChange} type='text'></textarea>
        </div>
      </form>
    </div>
  )
}

export default AmountForm