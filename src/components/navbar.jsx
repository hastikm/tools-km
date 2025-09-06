import React from 'react'
import icon from '../assets/icons/symbole.png'
const Navbar = () => {
  return (
    <div className='lalezar'>
      <ul>
           <div>
            <img src={icon} alt="icon-nav"  width={100}/>
           <li className=''>Km Tools</li>
           
           </div>
           <li>خانه</li>


      </ul>
    </div>
  )
}

export default Navbar
