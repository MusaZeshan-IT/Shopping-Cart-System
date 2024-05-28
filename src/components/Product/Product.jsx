import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

function Product(props) {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

    function isCartItemAmount() {
        if (cartItems[id] < 1) {
            return <></>;
        } else {
            return <>
                <span>({cartItems[id]})</span>
            </>
        }
    }

    return (
        <div className='product'>
            <img src={productImage} alt="" />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button onClick={() => {
                addToCart(id)
            }} className='addToCartBtn'>Add To Cart {isCartItemAmount()}</button>
        </div>
    )
}

export default Product