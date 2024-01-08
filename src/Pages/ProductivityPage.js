import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ProductivityPage() {
  return (
    <div className='porductivity-page-container'>

      <div className='productivity-button-container'>
        <NavLink to='todoapp'> <div className='todo-app-button-container'> <button className='todo-app-button'>TodoApp</button> </div> </NavLink>

        <NavLink to='budgetingapp' > <div className='buddgeting-app-button-container'> <button className='budgeting-app-button'>BudgetingApp</button> </div> </NavLink>
      </div>

     <Outlet/>

    </div>
  )
}

export default ProductivityPage