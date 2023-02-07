import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer id='footer'>
      <a href='#' className='footer_logo'>MUGISHA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#protfolio">Portfolio</a></li>
        <li><a href="#testimonials">Inspirations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://facebook.com/Fmugisha10' target='_blank'><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/fred-m-4127b7105/' target='_blank'><BsLinkedin/></a>
        <a href='https://twitter.com/Mfredx' target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy;{currentYear.getFullYear()} Mugisha. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer