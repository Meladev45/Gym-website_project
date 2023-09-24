

import Logo from '../assets/logo.png'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import { content } from './content'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

      const [show,setshow] = useState(false)
    
  return (
   <nav>
    <div className="container nav_container">
     <Link to='/' className='logo'>
        <img src={Logo} alt="logo" />
     </Link>
     <ul className={`nav_links ${show ? 'show_nav':'hide'}`}>
      {content.map((contents,index)=>{
       return (
        <li key={index}>
            <NavLink to={contents.path} className={({isActive})=> isActive? 'active-nav':''} onClick={()=>setshow(prev =>!prev)}>{contents.name}</NavLink>
        </li>
       )
      })}
     </ul>
     <button className='nav_togglebtn' onClick={()=>setshow(prev =>!prev)}>
     {show ?<FaTimes/>: <FaBars/>}
     </button>
    </div>
   </nav>
  )
}

export default Navbar