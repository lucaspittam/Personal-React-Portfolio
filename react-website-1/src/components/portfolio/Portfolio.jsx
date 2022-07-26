import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt='portfolio  1'/>
          </div>
          <h3>Personal Portfolio | React/Node.js</h3>
          <div className="portfolio_item-cta">
             <a href='https://github.com/lucaspittam?tab=repositories' className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
            <a href='https://lucaspittam.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt='portfolio  2' />
          </div>
          <h3>Sendmi | Crypto Exchange | React/Solidity</h3>
          <div className="portfolio_item-cta">
           <a href='https://github.com/lucaspittam/Web3-App-1' className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
           <a href='https://sendmi.tech' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt='portfolio  3' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/lucaspittam?tab=repositories' className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
           <a href='https://github.com/lucaspittam?tab=repositories' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt='portfolio 4' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/lucaspittam?tab=repositories' className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
            <a href='https://github.com/lucaspittam?tab=repositories' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt='portfolio 5' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
           <a href='https://github.com/lucaspittam?tab=repositories' className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
           <a href='https://github.com/lucaspittam?tab=repositories' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt='portfolio 6' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
           <a href='https://github.com/lucaspittam?tab=repositories' className='btn' target='_blank' rel="noopener noreferrer" >Github</a>
           <a href='https://github.com/lucaspittam?tab=repositories' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      </div>



    </section>
  )
}

export default Portfolio