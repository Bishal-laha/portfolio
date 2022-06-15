import React from 'react'
import './about.css'
import ME from '../../img/3.jpg'
import { FaAward } from 'react-icons/fa'
// import { FaUser } from 'react-icons/fa'\
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <div className='head'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me_image">
              <img src={ME} alt="me" />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Beginner</small>
            </article>
            {/* <article className='about_card'>
              <FaUser className='about_icon'/>
              <h5>Clients</h5>
              <small></small>
            </article> */}
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo natus velit sit nostrum beatae animi non magnam quibusdam ipsam expedita.</p>
          <a href="#contact" className='btn btn-primary btn_about'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
