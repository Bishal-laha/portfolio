import React from 'react'
import './project.css'
import IMG from '../../img/portfolio1.jpg'

const project = () => {
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Project</h2>
      <div className="container project_container">
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG} alt="" />
          </div>
          <div className='project_text'>
            <h3>This is 1st Project</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at.</p>
          </div>
          <div className="project_btn">
            <a href="/#" className='btn' target='_blank'>Github</a>
            <a href="/#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG} alt="" />
          </div>
          <div className='project_text'>
            <h3>This is 2nd Project</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at.</p>
          </div>
          <div className="project_btn">
            <a href="/#" className='btn' target='_blank'>Github</a>
            <a href="/#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG} alt="" />
          </div>
          <div className='project_text'>
            <h3>This is 3rd Project</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at.</p>
          </div>
          <div className="project_btn">
            <a href="/#" className='btn' target='_blank'>Github</a>
            <a href="/#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default project
