import React from 'react'
import { BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills do I have?</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content content1">
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'  />
              <div>
                <h4>HTML</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>ReactJS</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>Tailwind</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>NodeJS</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>Mongodb</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_other">
          <h3>Other</h3>
          <div className="experience_content">
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>Java</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>Programming C</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='details'>
              <BsPatchCheckFill className= 'experience_icon'/>
              <div>
                <h4>Pl-SQL</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
