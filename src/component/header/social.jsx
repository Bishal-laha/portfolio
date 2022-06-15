import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const social = () => {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/bishal-laha-b72806204" target="_blank" rel='noreferrer'><BsLinkedin/></a>
      <a href="https://github.com/Bishal-laha" target="_blank" rel='noreferrer'><FaGithub/></a>
    </div>
  )
}

export default social
