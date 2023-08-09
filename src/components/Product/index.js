import React, { useContext, useState } from 'react'
import { cartContext } from '../../contexts/cart-context'

const Product = (props) => {
	const [totalProduct, setTotalProduct] = useState(0)
	const cartCtx = useContext(cartContext)

	const addToCar = () => {
		cartCtx.addToCart(1)
	}

	return (
		<div className='product'>
			<span>{props.name}</span>
			<span>${props.price}</span>
			<button onClick={addToCar}>Add To Cart</button>
		</div>
	)
}

export default Product

