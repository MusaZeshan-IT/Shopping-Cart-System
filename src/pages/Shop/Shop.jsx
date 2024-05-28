import React from 'react'
import PRODUCTS from '../../helpers/Products'
import Product from '../../components/Product/Product'
import './Shop.css'

function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>MusaZeshan's Shop</h1>
      </div>
      <div className="products">{PRODUCTS.map((product) => {
        return <Product data={product} key={product.id} />
      })}</div>
    </div>
  )
}

export default Shop