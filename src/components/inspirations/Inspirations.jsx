import React from 'react'
import "./inspirations.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//import Swiper and Swiper style
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"

const data = [
  {
    avatar: AVTR1,
    name: 'Will Smith',
    review: '“I know how to learn anything I want to learn. I absolutely know that I could learn how to fly the space shuttle because someone else knows how to fly it, and they put it in a book. Give me the book, and I do not need somebody to stand up in front of the class.”'
  },
  {
    avatar: AVTR2,
    name: 'Abraham Lincoln',
    review: 'I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.”'
  },
  {
    avatar: AVTR3,
    name: 'Albert Einstein',
    review: '“Life is like riding a bicycle. To keep your balance you must keep moving.”'
  },
  {
    avatar: AVTR4,
    name: 'Albert Einstein',
    review: '“Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.”'
  },
]

const Inspirations = () => {
  return (
    <section id='inspirations'>
      <h5>Motivators</h5>
      <h2>Inspiration Quotes</h2>

      <Swiper className='container inspirations_container'
      //install swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='inspiration'>
                <small className='client_review'>{review}</small>
                <h5 className='client_name'>{name}</h5>
                <div className='client_avatar'>
                  <img src={avatar} alt='Avatar One' />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Inspirations