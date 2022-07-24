import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
       <a href='https://www.linkedin.com/in/lucas-pittam-3209bb22b/' target='_blank' rel='noreferrer'> <BsLinkedin/> </a>
       <a href='https://github.com/lucaspittam' target='_blank' rel='noreferrer'> <BsGithub/> </a>
       <a href='https://twitter.com/Pitzii_/' target='_blank' rel='noreferrer'> <BsTwitter/> </a>


    </div>
  )
}

export default HeaderSocials