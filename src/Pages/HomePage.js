import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='home-page-container'>

      <div className='prod-enter-option-container'>
        <div className='home-button-container'>
          <Link to='/productivity'>
          <div className='entertainment-option'>
            <button className ="custom-btn btn-1"><span>Productivity</span></button>
          </div>
          </Link>
        </div>

        <div className='home-button-container'>
          <Link to='entertainment'>
          <div className='entertainment-option'>
            <button className ="custom-btn btn-1"><span>Entertainment</span></button>
          </div>
          </Link>
        </div>
      </div>

    <div className='add-more-button-container'>  <div className='add-more-button-parent-container'><button className="custom-btn btn-12"><span>Coming Soon!</span><span>Add More +</span></button></div> </div>      
    
    </div>
  )
}

export default HomePage