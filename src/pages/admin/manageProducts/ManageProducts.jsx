import React, { useState } from 'react'

import './manageProducts.scss'
import Products from '../../../components/products/Products'
import { useCreateProductMutation, useGetProductsQuery } from '../../../context/api/productApi'
import Modal from '../../../components/modal/Modal'
import { useGetValue } from '../../../hooks/useGetValue'

const initialState = {
    id: `${new Date().getTime()}`,
    categoryId: "2",
    title: "Kid's Toys",
    description: "The best toy in the world and good quality product",
    category: "Kid's Furniture",
    price: 12.0,
    oldPrice: 15.0,
    rating: 3.5,
    stock: 45,
    images: ["https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-toy-teddy-bear-in-brown-color-png-image_10294350.png"]
}

const ManageProducts = () => {

    const [createProductModal, setCreateProductModal] = useState(false)

    const { data, isLoading, isSuccess } = useGetProductsQuery()
    const [createProduct, { data: datta }] = useCreateProductMutation()
    const { formData, handleChange, setFormData } = useGetValue(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        createProduct(formData)
    }

    return (
        <div className='manage-products'>
            <div className="manage-products__top">
                <h1>Manage Products</h1>
                <button onClick={() => setCreateProductModal(true)}>Create Product</button>
            </div>
            <Products data={data} limit={16}/>
            {
                createProductModal
                    ?
                    <Modal setModal={setCreateProductModal}>
                        <form onSubmit={handleSubmit} className='manage-products__form' action="">
                            <h2>Create Product</h2>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product Title *</label>
                                <input value={formData.title} onChange={(e) => handleChange(e)} name='title' type="text" placeholder='title' required />
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product Description *</label>
                                <textarea value={formData.description} onChange={(e) => handleChange(e)} name='description' id=""></textarea>
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product  Category *</label>
                                <input value={formData.category} onChange={(e) => handleChange(e)} name='category' type="text" placeholder='category' required />
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product Price *</label>
                                <input value={formData.price} onChange={(e) => handleChange(e)} name='price' type="number" placeholder='price' required />
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product  Old Price *</label>
                                <input value={formData.oldPrice} onChange={(e) => handleChange(e)} name='oldPrice' type="number" placeholder='old price' required />
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product Rating *</label>
                                <input value={formData.rating} onChange={(e) => handleChange(e)} name='rating' type="number" placeholder='rating' required />
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product Stock *</label>
                                <input value={formData.stock} onChange={(e) => handleChange(e)} name='stock' type="number" placeholder='stock' required />
                            </div>
                            <div className="manage-products__form__input">
                                <label htmlFor="">Product Image Url *</label>
                                <input value={formData.images[0]} onChange={(e) => handleChange(e)} name='images' type="text" placeholder='image' required />
                            </div>
                            <button>Create Product</button>
                        </form>
                    </Modal>
                    :
                    <></>
            }
        </div>
    )
}

export default ManageProducts