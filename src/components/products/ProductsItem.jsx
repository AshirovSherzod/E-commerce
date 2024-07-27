import React, { useState } from 'react'
import { BsCartCheck, BsCartCheckFill } from 'react-icons/bs'
import { GoHeart, GoHeartFill } from 'react-icons/go'
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

import './products.scss'
import { Link, useLocation } from 'react-router-dom'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../context/slices/cartSlice'
import { like } from '../../context/slices/wishlistSlice'
import { FaRegTrashAlt } from 'react-icons/fa'
import { RiEdit2Line } from 'react-icons/ri'
import { useDeleteProductMutation, useUpdateProductMutation } from '../../context/api/productApi'
import Modal from '../modal/Modal'
import { useGetValue } from '../../hooks/useGetValue'



const ProductsItem = ({ data }) => {

    const initialState = {
        categoryId: data.categoryId,
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
        oldPrice: data.oldPrice,
        rating: data.rating,
        stock: data.stock,
        images: ""
    }

    // console.log(initialState.images);

    const wishlistData = useSelector(state => state.wishlist.value)
    const cartData = useSelector(state => state.cart.value)
    const [deletProduct] = useDeleteProductMutation()
    const [updateProduct] = useUpdateProductMutation()
    const { formData, handleChange, setFormData } = useGetValue(initialState)


    const [deletModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    const dispatch = useDispatch()
    let { pathname } = useLocation()
    let pathAdmin = pathname.includes("/admin")

    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<IoMdStar />);
        }
        if (rating % 1 > 0.4) {
            res.push(<IoMdStarHalf />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<IoMdStarOutline />)
        }
        return res;
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        let editedProduct = {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            price: formData.price,
            oldPrice: formData.oldPrice,
            rating: formData.rating,
            stock: formData.stock,
            images: [...data.images, formData.images]
        }
        console.log(editedProduct.images);
        updateProduct({ body: editedProduct, id: data.id })
    }

    return (
        <div className='products__card'>
            <div className="products__card__img">
                {
                    pathAdmin
                        ?
                        <img src={data.images[0]} alt="" />
                        :
                        <Link to={`details/${data.id}`}>
                            <img src={data.images[0]} alt="" />
                        </Link>

                }
                {
                    pathAdmin
                        ?
                        <>
                            <button onClick={() => setDeleteModal(true)} className='delete'><FaRegTrashAlt /></button>
                            <button onClick={() => setEditModal(true)} className='edit'><RiEdit2Line /></button>
                        </>
                        :
                        <>
                            <button onClick={() => dispatch(like(data))} className='heart'>
                                {wishlistData.some((el) => el.id === data.id) ? (
                                    <GoHeartFill color="crimson" />
                                ) : (
                                    <GoHeart />
                                )}
                            </button>
                            <button onClick={() => dispatch(addToCart(data))} className='addtocart'>
                                {cartData.some((el) => el.id === data.id) ? (
                                    <> <BsCartCheckFill /> Add to Card</>
                                ) : (
                                    <><BsCartCheck /> Add to Card</>
                                )}</button>
                        </>
                }
            </div>
            <div className="products__card__title">
                <p className='products__card__title-rating'>{getRating(data.rating)}</p>
                <h3 title={data.title} className='line-clamp'>{data.title}</h3>
                <div className="products__card__title-price">
                    <p>${data.price}</p>
                    <p>${data.oldPrice}</p>
                </div>
            </div>
            {
                deletModal
                    ?
                    <Modal setModal={setDeleteModal}>
                        <div className="products__modal">
                            <p>Do you really want to delete this product?</p>
                            <div className="products__modal__btns">
                                <button onClick={() => {
                                    deletProduct(data.id)
                                    setDeleteModal(false)
                                }}>Yes</button>
                                <button onClick={() => setDeleteModal(false)}>No</button>
                            </div>
                        </div>
                    </Modal>
                    :
                    <></>
            }
            {
                editModal
                    ?
                    <Modal setModal={setEditModal}>
                        <form onSubmit={handleSubmit} className='products__form' action="">
                            <h2>Create Product</h2>
                            <div className="products__form__input">
                                <label htmlFor="">Product Title *</label>
                                <input value={formData.title} onChange={(e) => handleChange(e)} name='title' type="text" placeholder='title' required />
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product Description *</label>
                                <textarea value={formData.description} onChange={(e) => handleChange(e)} name='description' id=""></textarea>
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product  Category *</label>
                                <input value={formData.category} onChange={(e) => handleChange(e)} name='category' type="text" placeholder='category' required />
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product Price *</label>
                                <input value={formData.price} onChange={(e) => handleChange(e)} name='price' type="number" placeholder='price' required />
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product  Old Price *</label>
                                <input value={formData.oldPrice} onChange={(e) => handleChange(e)} name='oldPrice' type="number" placeholder='old price' required />
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product Rating *</label>
                                <input value={formData.rating} onChange={(e) => handleChange(e)} name='rating' type="number" placeholder='rating' required />
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product Stock *</label>
                                <input value={formData.stock} onChange={(e) => handleChange(e)} name='stock' type="number" placeholder='stock' required />
                            </div>
                            <div className="products__form__input">
                                <label htmlFor="">Product Image Url *</label>
                                <input value={formData.images} onChange={(e) => handleChange(e)} name='images' type="text" placeholder='image' required />
                            </div>
                            <button>Edit Product</button>
                        </form>
                    </Modal>
                    :
                    <></>
            }

        </div>
    )
}

export default ProductsItem
