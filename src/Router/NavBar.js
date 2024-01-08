import React from 'react'
import WeatherApp from '../Components/WeatherAppComponents/WeatherApp'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <div className='app-Container'>
 
      <div className='header'>
        
        <div className='logo-container'>
          <Link  to='/'>   
          <div ><img className='brain-image' src={require('../Images/brain.webp')}></img></div>
          </Link>

          <Link className='link-without-underline' to='/'>        
          <div className='header-text'><p className='brain-text'>Brains</p></div>
          </Link>

        </div>

        <div className='weather-app-container'>
          <WeatherApp/>
        </div>

        <div className='nav-bar'>
            <div className='nav-bar-home'><Link to='/'> <button className='btn-7'>Home</button>  </Link></div>
            <div className='nav-bar-productivity'><Link to='productivity'><button className='btn-7'>Productivity</button></Link></div>
            <div className='nav-bar-entertainmanet'><Link to='entertainment'><button className='btn-7'>Entertainment</button></Link></div>  
          </div>

      </div>

      {/* <div className='nav-bar'>
        <div className='nav-bar-home'><Link to='/'> <button className='btn-7'>Home</button>  </Link></div>
        <div className='nav-bar-productivity'><Link to='productivity'><button className='btn-7'>productivity</button></Link></div>
        <div className='nav-bar-entertainmanet'><Link to='entertainment'><button className='btn-7'>Entertainment</button></Link></div>  
      </div> */}

      <div className='Outlet'>
        <Outlet/>
      </div> 

    </div>
  )
}

export default NavBar