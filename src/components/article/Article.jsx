import React, { memo } from 'react'

import './article.scss'
import { BsArrowRight } from 'react-icons/bs'
import one from '../../assets/images/article/1.png'
import two from '../../assets/images/article/2.png'
import three from '../../assets/images/article/3.png'


const Article = () => {
    return (
        <section className='article container'>
            <div className="article__top">
                <h1>Article</h1>
                <button>More Article <BsArrowRight /></button>
            </div>
            <div className="article__cards">
                <div className="article__card">
                    <div className="article__card-img">
                        <img src={one} alt="" />
                    </div>
                    <div className="article__card-title">
                        <h2>7 ways to deco home</h2>
                        <button>Read More <BsArrowRight /></button>
                    </div>
                </div>
                <div className="article__card">
                    <div className="article__card-img">
                        <img src={two} alt="" />
                    </div>
                    <div className="article__card-title">
                        <h2>Kitchen organization</h2>
                        <button>Read More <BsArrowRight /></button>
                    </div>
                </div>
                <div className="article__card">
                    <div className="article__card-img">
                        <img src={three} alt="" />
                    </div>
                    <div className="article__card-title">
                        <h2>Decor your bedroom</h2>
                        <button>Read More <BsArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Article)