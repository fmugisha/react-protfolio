import React from 'react'
import "./portfolio.css"
import IMAGE1 from '../../assets/lyricsBlog.jpg'
import IMAGE2 from '../../assets/e-book.jpg'
import IMAGE3 from '../../assets/pizzaStore.jpg'

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: 'Lyics Blog Dashboard & Homepage page...',
    github: 'https://github.com/fmugisha/lyrics',
    languages: 'HTML, CSS, JAVASCRIPT, LARAVEL, MySQL',
  },
  {
    id: 2,
    image: IMAGE2,
    title: 'E-Book Dashboard & Homepage page...',
    github: 'https://github.com/fmugisha/book',
    languages: 'HTML, CSS, JAVASCRIPT, DJANGO, PostgreSQL',
  },
  {
    id: 3,
    image: IMAGE3,
    title: 'Pizza Store site Landing page & Dashboard',
    github: 'https://github.com/fmugisha/pizza',
    languages: 'HTML, Materialize CSS, PHP, MySQL',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, languages }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <h5 className='portfolio_tech'>{languages}</h5>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio