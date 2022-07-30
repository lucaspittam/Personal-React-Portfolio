import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#home"className="footer_logo">Lucas</a>

      <ul className="permalinks">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://'> <FaInstagram /></a>
        <a href='https://'> <BsTwitter /></a>
        <a href='https://'><FaLinkedin /></a>
      </div>

        <div className="footer_copyright">
          <small>&copy; Lucas Pittam Consulting. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer