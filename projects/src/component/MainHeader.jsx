import React from 'react'
import {Link} from 'react-router-dom'
import image from '../assets/main_header.png'

const MainHeader = () => {
  return (
   <header className="main_header">
    <div className="container main_header-container">
        <div className="main_header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join The Lengend of the fitness world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique in explicabo quibusdam sit ut.</p>
            <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>

        <div className="main_header-right">
            <div className="main_header-circle"></div>
            <div className="main_header-image">
                <img src={image} alt="image" />
            </div>
        </div>
    </div>
   </header>
  )
}

export default MainHeader