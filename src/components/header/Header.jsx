import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/fred-h.png'
import HeaderSocial from './Headersocials'

const Header = () => {
  return (
    <header id="header">
      <div className='container header_container'>
        <div className='header_intro'>
          <h5>Hello I'm</h5>
          <h1>MUGISHA Fred</h1>
          <h5 className='text-light'>Junior Software Developer</h5>
          <CTA />
        </div>

        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#footer' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header