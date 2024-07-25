import React from 'react'
import Hero from '../../components/hero/Hero'
import Simple from '../../components/simple/Simple'
import { useGetProductsQuery } from '../../context/api/productApi'
import Products from '../../components/products/Products'
import Hundreds from '../../components/hundreds/Hundreds'
import Article from '../../components/article/Article'
import img1 from '../../assets/images/article/1.png'
import img2 from '../../assets/images/article/2.png'
import img3 from '../../assets/images/article/3.png'

const Home = () => {

  const { data, isLoading, isSuccess } = useGetProductsQuery({ limit: 8, page: 1 })

  return (
    <main>
      <Hero />
      <Simple />
      <Products data={data} isLoading={isLoading} isSuccess={isLoading} />
      <Hundreds />
      <section className='container'>
        <Article one={img1} two={img2} three={img3} />
      </section>
    </main>
  )
}

export default Home