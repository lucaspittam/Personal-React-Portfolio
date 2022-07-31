import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='about_container'>
        <div className='about_me'>
            <div className="about_me-image">
              <img src={ME} alt="about"/>
            </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small> 20+ Globally</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small> 50+ Completed!</small>
            </article>

          </div>

          <p>Full-stack developer with a passion for solving problems and a commitment to lifelong learning. Skills in Html, Javascript, React and with the 
            unique skill set of using creativity and logic to solve comprehensive problems through code. I am motivated to develop responsive websites and applications.<br/><br/>
             Positioned to provide a unique perspective on how users interact with websites by leveraging a Certificate of Web Development from University of Toronto 
             and work experience in Brand Development. When not drinking coffee and spending long hours at a computer, I like to stay fit with
              Mixed Martial arts like Brazilian Jiu Jitsu and Boxing.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>

      </div>
    </section>
  )
}

export default About