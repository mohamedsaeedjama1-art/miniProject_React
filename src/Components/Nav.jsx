import React from 'react'
import {NavLink} from 'react-router'
import './MyCom.css'

const Nav = () => {
  return (
 <>
  <h3 id='Last'>Dashboard</h3>
 <div className='section'>
 
 <NavLink to="/">Home</NavLink>
<NavLink to="/Class">Class</NavLink>
 <NavLink to="/Finance">Finanace</NavLink>
  <NavLink to="/Registration">Registration</NavLink>
  </div>
 </>

  )
}

export default Nav
