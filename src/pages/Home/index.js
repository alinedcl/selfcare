import React from 'react'
import '../../styles/Home.css'
import { productList } from '../../utils/productList'

import ProductCard from '../../components/ProductCard'

import banner from '../../assets/banner.png'

const Home = () => {
    return (
      <>
        <div className='banner-section'>
          <img src={banner} alt='banner' />
        </div>
        <div className='promo-section'>
          <strong>PROMOÇÃO</strong>
          <p>9 produtos</p>
          </div>

          <main>
            {
              productList.map((item) => {
                return (
                  <ProductCard
                  key={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                  />
                )
              })
            }
          </main>
        </>
    )
}

export default Home 