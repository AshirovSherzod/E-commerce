import React from 'react'
import Hero from '../../components/hero/Hero'
import Simple from '../../components/simple/Simple'
import { useGetProductsQuery } from '../../context/api/productApi'
import Products from '../../components/products/Products'
import Hundreds from '../../components/hundreds/Hundreds'
import Article from '../../components/article/Article'

const Home = () => {

  const { data, isLoading, isSuccess } = useGetProductsQuery({limit: 8, page: 1})

  return (
    <main>
      <Hero />
      <Simple />
      <Products data={data} isLoading={isLoading} isSuccess={isLoading} />
      <Hundreds />
      <Article />
    </main>
  )
}

export default Home