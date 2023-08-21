import React, { useEffect, useState } from 'react'
import MilkTea from '../component/milktea'
import BannerImg from '../resources/images/banner.jpg'

const MilkTeas = () => {
	const [milkTeas, setMilkTeas] = useState([])
	const [order, setOrder] = useState({})

	useEffect(() => {
		const fetchMilkTeas = async () => {
			const res = await fetch(`https://foody-1d42f-default-rtdb.asia-southeast1.firebasedatabase.app/milkteas.json`)
			const data = await res.json()

			let milkTeas = []
			for (const key in data) {
				milkTeas.push({
					id: key,
					name: data[key].name,
					price: data[key].price,
					count: data[key].count,
				})
			}
			setMilkTeas(milkTeas)
		}
		fetchMilkTeas()
	}, [])

	const onChangeTotalMilkTea = (id, milk) => {
		console.log('Component or pages tat ca cac coc tra sua...')
		console.log('id', id)
		console.log('milk', milk)
		setOrder((prevState) => ({ ...prevState, [id]: { ...milk } }))
		// setOrder((prevState) => {
		// 	return { ...prevState, [id]: { ...milk } }
		// })
	}

	return (
		<>
			<div className='banner'>
				<img src={BannerImg} alt='banner' />
			</div>
			<div className='milk-teas'>
				{console.log('order', order)}
				{milkTeas.map((milk) => (
					// <MilkTea name={milk.name} price={milk.price} count={milk.count} />
					// <MilkTea info={milk} />
					<MilkTea key={milk.id} {...milk} onChangeTotalMilkTea={onChangeTotalMilkTea} />
				))}
				<button className='order-btn'>Order</button>
			</div>
		</>
	)
}

export default MilkTeas

