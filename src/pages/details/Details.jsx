import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'

import './details.scss'
import regular from '../../assets/icons/star-regular.svg'
import half from '../../assets/icons/star-half.svg'
import solid from '../../assets/icons/star-solid.svg'
import { COMMENTS_DATA } from '../../static'
import ReviewCustomer from '../../components/reviewCustomer/ReviewCustomer'

const Details = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const { id } = useParams()
  const { data, isLoading } = useGetProductByIdQuery(id)
  const [index, setIndex] = useState(0)
  const [abtab, setAbtab] = useState(3)

  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<img className='products__card-title__rating-img' src={solid} alt="" />);
    }
    if (rating % 1 > 0.4) {
      res.push(<img className='products__card-title__rating-img' src={half} alt="" />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<img className='products__card-title__rating-img' src={regular} alt="" />);
    }
    return res;
  };

  let info = <div className="details__comments-info">
    <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem excepturi eius culpa eos laboriosam rerum, fugit nostrum quae placeat hic nihil facere! Voluptate ut possimus iste accusantium aperiam delectus debitis corrupti inventore hic eum facere, nihil at quasi sequi eligendi explicabo consequatur. Commodi ipsa quos, consectetur, adipisci repellendus veritatis necessitatibus officiis culpa doloremque voluptate libero et odit. Doloremque quo dolorem animi pariatur ullam ducimus, consequuntur perspiciatis ratione aut maxime, dolores accusamus exercitationem sed ab nisi, maiores quibusdam saepe ea. Eaque dolores molestiae accusantium facere laborum at, suscipit eos iusto sint temporibus! Cupiditate repellendus possimus repellat, praesentium voluptates dolorum aliquid dolores.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius unde minima officia ducimus harum, provident assumenda est exercitationem doloremque. Vero sint aspernatur dolores ad pariatur aperiam culpa eum molestiae?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nobis perspiciatis. Perspiciatis eveniet nihil, quis ullam eos, impedit ad iure id aut ut nulla officia voluptates molestiae? Vitae pariatur cumque corporis eveniet quos debitis accusamus eaque quas? Fugiat esse deleniti asperiores, ad dolor optio ab cum cumque voluptatum, veritatis voluptatem obcaecati explicabo odit nobis pariatur officia placeat. Nostrum soluta voluptatum fugiat voluptatem, tempore nobis, itaque quasi adipisci nulla, perspiciatis minima corrupti illum libero est deserunt veniam reiciendis vel tempora. Laboriosam quidem obcaecati exercitationem voluptate porro facere assumenda voluptatum! Harum sequi laborum aperiam vel nostrum, culpa assumenda neque tempora deserunt quae nisi eligendi itaque temporibus ratione? Non nesciunt eos nihil sed doloremque facere fugit iure accusamus unde in, eum omnis. Sequi perspiciatis fugit debitis eveniet incidunt ipsum tenetur! Eos necessitatibus iusto nulla quibusdam a explicabo quam expedita labore atque, dicta aut, harum, autem numquam eveniet facere deserunt ducimus suscipit esse voluptatem?</p>

  </div>

  let question = <div className="details__comments-info">
    <h1>Lorem Ipsum Dolor Sit</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius unde minima officia ducimus harum, provident assumenda est exercitationem doloremque. Vero sint aspernatur dolores ad pariatur aperiam culpa eum molestiae?</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem excepturi eius culpa eos laboriosam rerum, fugit nostrum quae placeat hic nihil facere! Voluptate ut possimus iste accusantium aperiam delectus debitis corrupti inventore hic eum facere, nihil at quasi sequi eligendi explicabo consequatur. Commodi ipsa quos, consectetur, adipisci repellendus veritatis necessitatibus officiis culpa doloremque voluptate libero et odit. Doloremque quo dolorem animi pariatur ullam ducimus, consequuntur perspiciatis ratione aut maxime, dolores accusamus exercitationem sed ab nisi, maiores quibusdam saepe ea. Eaque dolores molestiae accusantium facere laborum at, suscipit eos iusto sint temporibus! Cupiditate repellendus possimus repellat, praesentium voluptates dolorum aliquid dolores.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nobis perspiciatis. Perspiciatis eveniet nihil, quis ullam eos, impedit ad iure id aut ut nulla officia voluptates molestiae? Vitae pariatur cumque corporis eveniet quos debitis accusamus eaque quas? Fugiat esse deleniti asperiores, ad dolor optio ab cum cumque voluptatum, veritatis voluptatem obcaecati explicabo odit nobis pariatur officia placeat. Nostrum soluta voluptatum fugiat voluptatem, tempore nobis, itaque quasi adipisci nulla, perspiciatis minima corrupti illum libero est deserunt veniam reiciendis vel tempora. Laboriosam quidem obcaecati exercitationem voluptate porro facere assumenda voluptatum! Harum sequi laborum aperiam vel nostrum, culpa assumenda neque tempora deserunt quae nisi eligendi itaque temporibus ratione? Non nesciunt eos nihil sed doloremque facere fugit iure accusamus unde in, eum omnis. Sequi perspiciatis fugit debitis eveniet incidunt ipsum tenetur! Eos necessitatibus iusto nulla quibusdam a explicabo quam expedita labore atque, dicta aut, harum, autem numquam eveniet facere deserunt ducimus suscipit esse voluptatem?</p>

  </div>

  return (
    <main className='details container'>
      <div className="details__product">
        <div className="details__product-img">
          <img className='first' src={data?.images[index]} alt="images" />
          <div className="details__product-img__images">
            <img onClick={() => setIndex(0)} src={data?.images[0]} alt="images" />
            <img onClick={() => setIndex(1)} src={data?.images[1]} alt="images" />
            <img onClick={() => setIndex(2)} src={data?.images[2]} alt="images" />
          </div>
        </div>
        <div className="details__product-details">
          <div className="details__product-details__title">
            <p className='rating'>{getRating(data?.rating)}</p>
            <h1>{data?.title}</h1>
            <p className='desc'>{data?.description}</p>
            <div className="details__product-details__title-price">
              <p>${data?.price}</p>
              <p>${data?.oldPrice}</p>
            </div>
          </div>
          <div className="details__product-details__date">
            <p>Offer expires in:</p>
            <div className="details__product-details-date__date">

            </div>
          </div>
          <div className="details__product-details__btns">
            <div className="details__product-details__btns-btns">
              <div className="details__product-details__btns-btns__counter">
                <button><FaMinus /></button>
                <p>0</p>
                <button><FaPlus /></button>
              </div>
              <button className='details__product-details__btns-btns__wishlist'><GoHeart /> Wishlist</button>
            </div>
            <button className='details__product-details__btns-addtocart'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="details__comments">
        <div className="details__comments-header">
          <button className={`details__comments-header__one ${abtab === 1 ? "details__comments-header__one-show" : ""}`} onClick={() => setAbtab(1)}>Additional Info</button>
          <button className={`details__comments-header__two ${abtab === 2 ? "details__comments-header__two-show" : ""}`} onClick={() => setAbtab(2)}>Questions</button>
          <button className={`details__comments-header__three ${abtab === 3 ? "details__comments-header__three-show" : ""}`} onClick={() => setAbtab(3)}>Reviews</button>
        </div>
        <div className="details__comments-body">
          {
            abtab === 1
              ?
              info
              :
              abtab === 2
                ?
                question
                :
                abtab === 3
                  ?
                  <ReviewCustomer />
                  :
                  <></>
          }
        </div>
      </div>
    </main>
  )
}

export default Details

{/* <GoHeartFill /> */ } 