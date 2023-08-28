import React, { useContext } from 'react'
import { cartContext } from '../context/cart-context'

const CartModal = () => {
	const cartCtx = useContext(cartContext)
	const cartItems = cartCtx.cart.items
	return (
		<div className='cart-modal'>
			<div className='cart-modal__title'>
				<span>Cart Information</span>
			</div>
			<ul>
				{cartItems &&
					cartItems.length > 0 &&
					cartItems.map((item) => (
						<div className='flex space-between'>
							<div className='flex gap-12'>
								<span>{item.name}</span>
								<span>{item.price}</span>
							</div>
							<span>So luong {item.count}</span>
						</div>
					))}

				{cartItems.length === 0 && <p className='text-center w-full  py-24'>No Items found!</p>}
			</ul>

			<p>So luong san pham {cartCtx.cart.totalItems}</p>
		</div>
	)
}

export default CartModal

