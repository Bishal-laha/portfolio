import React from 'react'
import CVbutton from './CVbutton'
import Social from './social'
import ME from '../../img/1.JPG'
import './header.css'

const header = () => {
  return (
    <header>
      <div className='container header_container'>
          <h5>Hello I am </h5>
          <h1>Bishal Laha</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CVbutton/>
          <Social />
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header
