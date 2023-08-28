import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/cart-context'

const MilkTea = (props) => {
	const { name, price, onChangeTotalMilkTea, id, inStock } = props
	const [totalItems, setTotalItems] = useState(0)
	const [totalIsValid, setTotalIsValid] = useState(true)
	const [overInStock, setOverInStock] = useState(false)

	const cartCtx = useContext(cartContext)

	const addToCartHandler = () => {
		if (!totalItems) {
			setTotalIsValid(false)
			return
		}
		if (totalItems > inStock) {
			setOverInStock(true)
			return
		}

		const cartItems = cartCtx.cart.items // lay ra items gio hand
		const curMilkTeaInCartIdx = cartItems.findIndex((item) => item.id === id)
		let newCountOfCurrentMilk = 0
		if (curMilkTeaInCartIdx > 0) {
			newCountOfCurrentMilk = cartItems[curMilkTeaInCartIdx].count + totalItems
		} else {
			newCountOfCurrentMilk = totalItems
		}

		const newCurMilkTea = { id, name, price, count: newCountOfCurrentMilk }
		const newCartItems = cartItems

		if (curMilkTeaInCartIdx > 0) {
			newCartItems[curMilkTeaInCartIdx] = newCurMilkTea
		} else {
			newCartItems.push(newCurMilkTea)
		}

		let newTotalCartItems = 0
		for (const item of newCartItems) {
			newTotalCartItems = newTotalCartItems + item.count
		}

		const newCartInfo = {
			items: newCartItems,
			totalItems: newTotalCartItems,
		}
		cartCtx.updateCart(newCartInfo)
		setTotalItems(0)
	}

	return (
		<div className='flex flex-col base-card'>
			<div className='milk-tea'>
				<div className='milk-tea__left'>
					<span>{name}</span>
					<span>{price}</span>
				</div>
				<div className='flex gap-12 align-items-center'>
					<input
						type='number'
						min={1}
						// max={inStock}
						// onChange={(e) => {
						// 	const milkInfo = {
						// 		total: parseInt(e.target.value),
						// 		name,
						// 		price,
						// 		id,
						// 	}
						// 	onChangeTotalMilkTea(id, milkInfo)
						// }}
						value={totalItems}
						onChange={(e) => {
							// console.log(e.target.value)
							// console.log(21)
							setTotalItems(parseInt(e.target.value))
						}}
					/>
					<i className='icon icon-cart fa-solid fa-cart-plus' onClick={addToCartHandler}></i>
				</div>
			</div>
			<div className={!totalIsValid || overInStock ? 'px-20 py-16' : ''}>
				{!totalIsValid && <p className='m-0 invalid'>Vui long dat it nhat mot coc!</p>}
				{overInStock && <p className='m-0 invalid'>Vui long giam so luong order!</p>}
			</div>
		</div>
	)
}

export default MilkTea

