import React from 'react'
import './footer.css'
import logo from '../../img/logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="/#" className='footer_logo'><img src={logo} alt="logo" /></a>
      <hr />
      <ul className='link'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact US</a></li>
      </ul>

      <div className="footer_social">
        <a href="http://facebook.com" target='_blank' rel='noreferrer'><FaFacebookF/></a>
        <a href="http://instagram.com" target='_blank' rel='noreferrer'><FiInstagram/></a>
        <a href="https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href="http://twitter.com" target='_blank' rel='noreferrer'><IoLogoTwitter/></a>
      </div>
      <hr />
      <div className="footer_copyright">
        <small>&copy;Bishal's Personal Portfolio. All rights reserved.</small>
      </div>
      
      
    </footer>
  )
}

export default footer
