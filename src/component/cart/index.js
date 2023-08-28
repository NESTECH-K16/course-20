import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/cart-context'
import BaseBadge from '../ui/BaseBadge'
import { createPortal } from 'react-dom'
import CartModal from '../../context/CartModal'

const Cart = () => {
	const cartCtx = useContext(cartContext)
	const [open, setOpen] = useState()

	return (
		<div className='cart'>
			<BaseBadge
				icon={<i className='fa-solid fa-cart-shopping' onClick={() => setOpen(true)}></i>}
				count={cartCtx.cart.totalItems}
				title='Cart'
			/>
			{open && createPortal(<CartModal />, document.getElementById('dialog'))}
		</div>
	)
}

export default Cart

