import React from 'react'

import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header' >
     {/* <NavLink  to="/"><span>home</span></NavLink> */}

<NavLink to="setting"><span>Setting</span></NavLink>

<NavLink to="usage"><span>usage</span></NavLink>


<NavLink to="chart"><span>Chart</span></NavLink> 
<NavLink to="contact"><span>Contact</span></NavLink> 
    </div>
  )
}

export default Header
