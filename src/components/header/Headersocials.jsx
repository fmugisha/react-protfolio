import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/fred-m-4127b7105/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/fmugisha' target="_blank"><FaGithub/></a>
        <a href='https://wa.me/+250723848151' target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default Headersocials