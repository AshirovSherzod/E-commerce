import React from 'react'

import './shop.scss'
import Products from '../../components/products/Products'
import { useGetProductsQuery } from '../../context/api/productApi'

const Shop = () => {

  const { data, isLoading, isSuccess } = useGetProductsQuery({ limit: 8, page: 1 })

  return (
    <main className='shop'>
      <div className="container">
        <div className="shop__top ">
          <h1>Shop Page</h1>
          <p>Let’s design the place you always imagined.</p>
        </div>
      </div>
      <Products data={data} limit={8}/>
    </main>
  )
}

export default Shop