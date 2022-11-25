import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Myntra Clone</h3>
          <h4>React CSS</h4>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Source Code</a>
            <a href="https://gribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Meditation App</h3>
          <h4>HTML CSS JavaScript</h4>
          <div className="portfolio__item-cta">
            <a href="https://github.com/pritibpatil/MeditationApp" className='btn' target='_blank'> Source Code</a>
            <a href="https://pritibpatil.github.io/MeditationApp/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Tic-Tac-Toe</h3>
          <h4>HTML CSS JavaScript</h4>
          <div className="portfolio__item-cta">
            <a href="https://github.com/pritibpatil/TicTacToe.github.io" className='btn' target='_blank'> Source Code</a>
            <a href="https://pritibpatil.github.io/TicTacToe.github.io/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio                                                                