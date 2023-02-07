import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {HiBriefcase} from 'react-icons/hi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineRecommend} from 'react-icons/md'
import {useState} from 'react'
import {Link} from 'react-scroll'

const Nav = () => {
  const [click, setClick] = useState(false)
  const closeNav = () => setClick(false)
  return (
    <nav>
      <Link to="header" spy={true} smooth={true} offset={-100} duration={100} onClick={closeNav}><AiOutlineHome/></Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={closeNav}><AiOutlineUser/></Link>
      <Link to="experience" spy={true} smooth={true} offset={-100} duration={100} onClick={closeNav}><BiBook/></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={100} onClick={closeNav}><HiBriefcase/></Link>
      <Link to="inspirations" spy={true} smooth={true} offset={-100} duration={100} onClick={closeNav}><MdOutlineRecommend/></Link>
      <Link to="contact" spy={true} smooth={true} offset={-150} duration={100} onClick={closeNav}><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav