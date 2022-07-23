import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Resume</a>
        <a href='#contact'>Lets's Talk</a> 
        
    </div>
  )
}

export default CTA