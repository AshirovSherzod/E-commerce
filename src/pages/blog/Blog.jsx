import React from 'react'

import './blog.scss'
import Article from '../../components/article/Article'
import img1 from '../../assets/images/article/1.png'
import img2 from '../../assets/images/article/2.png'
import img3 from '../../assets/images/article/3.png'
import img4 from '../../assets/images/article/4.png'
import img5 from '../../assets/images/article/5.png'
import img6 from '../../assets/images/article/6.png'
import img7 from '../../assets/images/article/7.png'
import img8 from '../../assets/images/article/8.png'
import img9 from '../../assets/images/article/9.png'


const Blog = () => {
  return (
    <main className='blog container'>
      <section className='blog__top'>
        <h1>Our Blog</h1>
        <p>Home ideas and design inspiration</p>
      </section>
      <Article one={img1} two={img2} three={img3} />
      <Article one={img4} two={img5} three={img6} />
      <Article one={img7} two={img8} three={img9} />
    </main>
  )
}

export default Blog