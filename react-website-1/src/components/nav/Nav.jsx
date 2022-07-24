import React from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {BiBookAlt} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
<a href="#" className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
<a href='#about' onClick={() => setActiveNave('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
<a href='#experience'><BiBookAlt/></a>
<a href='#services'><RiServiceLine/></a>
<a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav