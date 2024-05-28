import React, { useContext, useEffect } from 'react'
import PRODUCTS from '../../helpers/Products'
import { ShopContext } from '../../context/shop-context';
import CartItem from '../../components/CartItem/CartItem'
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <CartItem data={product}></CartItem>
            )
          }
        })}
      </div>
      {getTotalCartAmount() > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${getTotalCartAmount()}</p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
          <button>Checkout</button>
        </div>
      ) : (
        <div className='checkout'>
          <h3>Cart is Empty</h3>
        </div>
      )
      }
    </div>
  )
}

export default Cart