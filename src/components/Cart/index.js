import React, { useContext } from 'react'
import { cartContext } from '../../contexts/cart-context'

const Cart = (props) => {
	const cartCtx = useContext(cartContext)
	console.log('cartCtx', cartCtx)
	return (
		<div>
			{cartCtx.cartTotal}
			<i className='fa-solid fa-cart-shopping'></i>
		</div>
	)
}

export default Cart

