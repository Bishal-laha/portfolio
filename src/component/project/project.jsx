import React from 'react'
import './project.css'
import IMG1 from '../../img/news.jpg'
import IMG2 from '../../img/car.png'
import IMG3 from '../../img/portfolio1.jpg'

const project = () => {
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Project</h2>
      <div className="container project_container">
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG1} alt="" />
          </div>
          <div className='project_text'>
            <h3>NewsMonk</h3>
            <p>It's a news fetching website.</p>
          </div>
          <div className="project_btn">
            <a href="https://github.com/Bishal-laha/NewsMonk" className='btn' target='_blank'>Github</a>
            {/* <a href="/#" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG2} alt="" />
          </div>
          <div className='project_text'>
            <h3>Car Game</h3>
            <p>This is a car game which is based on Javascript(JS)</p>
          </div>
          <div className="project_btn">
            <a href="https://github.com/Bishal-laha/JS-Game" className='btn' target='_blank'>Github</a>
            <a href="https://bishal-laha.github.io/JS-Game/8%20Game/game.html" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='project_item'>
          <div className="project_item_image">
            <img src={IMG3} alt="" />
          </div>
          <div className='project_text'>
            <h3>This is a Demo Project</h3>
            <p>It's for a demo</p>
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
