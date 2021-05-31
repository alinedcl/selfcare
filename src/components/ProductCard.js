import React from 'react'  
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'

const ProductCard = ({ name, price, img }) => {
    return (
        <>
        <div className='main-products-card'>
        <Link to='/'>
        <div className='product-card-img'>
        <img src={img} alt={name} />
        </div>
        </Link>
        <div className='product-card-info'>
          <p>{name}</p>
          <p>R$ <span>{`${price}`},00</span> </p>
        </div>
        </div>
        </>

    )
}

export default ProductCard