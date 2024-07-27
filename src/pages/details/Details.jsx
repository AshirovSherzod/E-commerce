import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { GoHeart, GoHeartFill } from 'react-icons/go'

import './details.scss'
import ReviewCustomer from '../../components/reviewCustomer/ReviewCustomer'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../../context/slices/wishlistSlice'
import { addToCart } from '../../context/slices/cartSlice'
import { BsCartCheck, BsCartCheckFill } from 'react-icons/bs'

const Details = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const { id } = useParams()
  const { data, isLoading } = useGetProductByIdQuery(id)
  const [index, setIndex] = useState(0)
  const [abtab, setAbtab] = useState(3)
  const wishlistData = useSelector(state => state.wishlist.value)
  const cartData = useSelector(state => state.cart.value)



  const dispatch = useDispatch()

  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<IoMdStar />);
    }
    if (rating % 1 > 0.4) {
      res.push(<IoMdStarHalf />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<IoMdStarOutline />);
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

  let count = 1
  let images = data?.images.map((img, inx) => (
    // console.log(img)
    <img className={`${inx === index ? "details__product-img__images-img" : ""}`} onClick={() => setIndex(inx)} src={img} alt="images" />
  ))
  console.log(index)
  // 



  return (
    <main className='details container'>
      {
        isLoading
          ?
          <div className="details__loading">
            <div className="details__loading-img">
              <div className="first"></div>
              <div className="details__loading-img__images">
                <div className="details__loading-img__images1"></div>
                <div className="details__loading-img__images1"></div>
                <div className="details__loading-img__images1"></div>
              </div>
            </div>
            <div className="details__loading-details">
              <div className="details__loading-details__div"></div>
              <div className="details__loading-details__div"></div>
              <div className="details__loading-details__div"></div>
              <div className="details__loading-details__div"></div>
              <div className="details__loading-details__div"></div>
            </div>
          </div>
          :
          <div className="details__product">
            <div className="details__product-img">
              <img className='first' src={data?.images[index]} alt="images" />
              <div className="details__product-img__images">
                {images}
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
              <div className="details__product-details__btns">
                <button onClick={() => dispatch(like(data ? data : ""))} className='details__product-details__btns-wishlist'>
                  {
                    wishlistData.some((el) => el.id === data?.id) ? (
                      <GoHeartFill color="crimson" />
                    ) : (
                      <GoHeart />
                    )
                  }
                  Wishlist</button>
                <button onClick={() => dispatch(addToCart(data ? data : ""))} className='details__product-details__btns-addtocart'>
                  {cartData.some((el) => el.id === data?.id) ? (
                    <> <BsCartCheckFill /> Add to Card</>
                  ) : (
                    <><BsCartCheck /> Add to Card</>
                  )}
                </button>
              </div>
            </div>
          </div>

      }
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
{/* <div className="details__product-details__btns__counter">
                  <button><FaMinus /></button>
                  <p>0</p>
                  <button><FaPlus /></button>
                </div> */}